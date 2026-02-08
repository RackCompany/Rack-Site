from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from typing import Optional, List
from dotenv import load_dotenv
from models import Base
from groq_filter import infer_filter
from crud import search_products
from pydantic import BaseModel
from typing import Literal
from models import UserPreference, UserProfile, Product
from sqlalchemy import func
import numpy as np

load_dotenv()

DATABASE = "postgresql+psycopg2://closet:closet@localhost:5433/closet"
engine = create_engine(DATABASE, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ClosetSearch")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class SearchReq(BaseModel):
    prompt: str
    user_id: Optional[int] = None
    sites_exclude: Optional[List[str]] = None  # <-- explicit Optional
    max_results: int = 48

class SearchResp(BaseModel):
    products: List[dict]

class PreferenceReq(BaseModel):
    user_id: int
    product_id: int
    action: Literal["click", "like", "dislike", "save"]


@app.post("/search", response_model=SearchResp)
def search(body: SearchReq, db: Session = Depends(get_db)):
    filter_json = infer_filter(body.prompt)
    
    # Safely handle optional sites_exclude
    if body.sites_exclude is not None:
        filter_json["sites_exclude"] = body.sites_exclude
    
    # Pass user_id explicitly, handle None
    rows = search_products(
        db=db,
        prompt=body.prompt,
        filter_json=filter_json,
        user_id=body.user_id,  # Optional[int] works now
        limit=body.max_results
    )
    
    products = [
        {
            "id": r.id,
            "title": r.title,
            "brand": r.brand,
            "price": r.price,
            "size": r.size,
            "colour": r.colour,
            "imageUrl": r.image_url,
            "deeplink": r.deeplink,
            "site": r.site
        } for r in rows
    ]
    return {"products": products}

@app.post("/preference")
def record_pref(body: PreferenceReq, db: Session = Depends(get_db)):
    # Save the action
    pref = UserPreference(
        user_id=body.user_id,
        product_id=body.product_id,
        action=body.action
    )
    db.add(pref)
    db.commit()
    
    # Update user's preference vector (average of liked items)
    update_user_profile(db, body.user_id)
    
    return {"status": "recorded", "user_id": body.user_id, "action": body.action}

def update_user_profile(db: Session, user_id: int):
    """Recalculate user's preference vector from their likes."""
    from crud import extract_vector  # or import at top
    
    liked = db.query(Product).join(UserPreference).filter(
        UserPreference.user_id == user_id,
        UserPreference.action.in_(["like", "save"])
    ).all()
    
    if not liked:
        return
    
    # Use extract_vector to handle all types
    vectors = []
    for p in liked:
        vec = extract_vector(p.embedding)
        if vec is not None:
            vectors.append(np.array(vec, dtype=float))
    
    if not vectors:
        return
    
    # Stack and average
    stacked = np.stack(vectors)
    avg_vector = np.mean(stacked, axis=0).astype(float).tolist()
    
    # Upsert
    profile = db.query(UserProfile).filter_by(user_id=user_id).first()
    if not profile:
        profile = UserProfile(user_id=user_id, preference_vector=avg_vector)
        db.add(profile)
    else:
        profile.preference_vector = avg_vector
    
    db.commit()
