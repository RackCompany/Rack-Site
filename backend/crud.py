from sqlalchemy.orm import Session
from sqlalchemy import func
from sentence_transformers import SentenceTransformer
from models import Product, UserProfile
import numpy as np
from typing import Optional, List, Any

# Load model once at module level
model = SentenceTransformer('all-mpnet-base-v2')


def embed(text: str) -> List[float]:
    """Convert text to 768-D vector as plain Python list."""
    if not text:
        text = ""
    
    # Encode returns numpy array
    result = model.encode(text, normalize_embeddings=True)
    
    # Force conversion to Python list of floats
    if isinstance(result, np.ndarray):
        return result.astype(float).tolist()
    
    # Fallback for any other type
    return [float(x) for x in result]


def extract_vector(value: Any) -> Optional[List[float]]:
    """
    Safely extract vector from SQLAlchemy Column or raw value.
    Handles: None, List[float], numpy array, or SQLAlchemy wrapped values.
    """
    if value is None:
        return None
    
    # Already a list
    if isinstance(value, list):
        return [float(x) for x in value]
    
    # Numpy array
    if isinstance(value, np.ndarray):
        return value.astype(float).tolist()
    
    # SQLAlchemy Column or other wrapper - try to unwrap
    # The actual value is loaded when accessed; force conversion
    try:
        # If it's a pgvector vector, it comes back as list-like
        raw = list(value)
        return [float(x) for x in raw]
    except (TypeError, ValueError):
        pass
    
    # Last resort: direct float conversion attempt
    try:
        return [float(value)]
    except (TypeError, ValueError):
        return None


def cosine_similarity(vec_a: List[float], vec_b: List[float]) -> float:
    """Calculate cosine similarity between two vectors."""
    if vec_a is None or vec_b is None:
        return 0.0
    
    a = np.array(vec_a, dtype=float)
    b = np.array(vec_b, dtype=float)
    
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    
    if norm_a == 0 or norm_b == 0:
        return 0.0
    
    return float(np.dot(a, b) / (norm_a * norm_b))


def search_products(
    db: Session, 
    prompt: str, 
    filter_json: dict, 
    user_id: Optional[int] = None,
    limit: int = 48
) -> List[Product]:
    """
    Search products with filters and optional personalization.
    """
    # Start query
    q = db.query(Product)
    f = filter_json

    # Apply structured filters
    if f.get("brand"):
        q = q.filter(func.lower(Product.brand).contains(f["brand"].lower()))
    
    if f.get("garment"):
        q = q.filter(Product.garment == f["garment"])
    
    if f.get("colour"):
        q = q.filter(func.lower(Product.colour).contains(f["colour"].lower()))
    
    if f.get("priceMin"):
        q = q.filter(Product.price >= f["priceMin"])
    
    if f.get("priceMax"):
        q = q.filter(Product.price <= f["priceMax"])
    
    if f.get("size"):
        q = q.filter(func.lower(Product.size).contains(f["size"].lower()))
    
    if f.get("condition"):
        q = q.filter(Product.condition == f["condition"])
    
    if f.get("sites_exclude"):
        q = q.filter(~Product.site.in_(f["sites_exclude"]))

    # Get base results via vector similarity
    query_emb = embed(prompt)
    
    # Use pgvector's cosine distance for ordering
    q = q.order_by(Product.embedding.cosine_distance(query_emb))
    
    # Fetch more than needed for re-ranking
    base_results = q.limit(limit * 2).all()
    
    # No user personalization requested
    if user_id is None:
        return base_results[:limit]
    
    # Personalize results for this user
    profile = db.query(UserProfile).filter_by(user_id=user_id).first()
    if profile is None:
        return base_results[:limit]
    
    # Extract user preference vector safely
    user_vec = extract_vector(profile.preference_vector)
    if user_vec is None:
        return base_results[:limit]
    
    # Score each product by similarity to user's preference vector
    scored = []
    
    for prod in base_results:
        # Extract product embedding safely
        prod_vec = extract_vector(prod.embedding)
        if prod_vec is None:
            continue
        
        # Calculate scores
        search_score = cosine_similarity(query_emb, prod_vec)
        pref_score = cosine_similarity(user_vec, prod_vec)
        combined_score = (0.7 * search_score) + (0.3 * pref_score)
        
        scored.append((combined_score, prod))
    
    # Sort by combined score descending
    scored.sort(key=lambda x: x[0], reverse=True)
    
    return [p for _, p in scored[:limit]]