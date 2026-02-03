from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from models import Base
from groq_filter import infer_filter
from crud import search_products

DATABASE = "postgresql+psycopg2://closet:closet@localhost:5433/closet"
engine = create_engine(DATABASE)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Closet-Search")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # restrict to your domain in prod
    allow_methods=["GET", "POST"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class SearchReq(BaseModel):
    prompt: str
    sites_include: list[str] | None = None
    sites_exclude: list[str] | None = None
    max_results: int = 50

class SearchResp(BaseModel):
    products: list[dict]

@app.post("/search", response_model=SearchResp)
def search(body: SearchReq, db: Session = Depends(get_db)):
    filter_json = infer_filter(body.prompt)
    # inject user site lists
    filter_json["sites_include"] = body.sites_include
    filter_json["sites_exclude"] = body.sites_exclude
    filter_json["semantic"] = body.prompt          # for vector
    rows = search_products(db, filter_json, body.max_results)
    products = [
        {
            "id"         : r.id,
            "title"      : r.title,
            "brand"      : r.brand,
            "price"      : r.price,
            "size"       : r.size,
            "colour"     : r.colour,
            "imageUrl"   : r.image_url,
            "deeplink"   : r.deeplink,
            "site"       : r.site
        } for r in rows
    ]
    return {"products": products}