from sqlalchemy.orm import Session
from sqlalchemy import or_, and_
#from pgvector.sqlalchemy import cosine_distance
from pgvector.sqlalchemy import Vector
from sqlalchemy import Column, Integer, String, Float
embedding = Column(Vector(768))
import torch, re
from sentence_transformers import SentenceTransformer
from models import Product
model = SentenceTransformer('all-mpnet-base-v2')

def embed(text: str):
    return model.encode(text, normalize_embeddings=True).tolist()

def search_products(db: Session, filter_json: dict, limit: int = 50):
    q = db.query(Product)
    f = filter_json

    # brand fuzzy match
    if f.get("brand"):
        q = q.filter(Product.brand.ilike(f"%{f['brand']}%"))
    # garment
    if f.get("garment"):
        q = q.filter(Product.garment == f["garment"])
    # colour
    if f.get("colour"):
        q = q.filter(Product.colour.ilike(f"%{f['colour']}%"))
    # price range
    if f.get("priceMin"):
        q = q.filter(Product.price >= f["priceMin"])
    if f.get("priceMax"):
        q = q.filter(Product.price <= f["priceMax"])
    # size
    if f.get("size"):
        q = q.filter(Product.size.ilike(f"%{f['size']}%"))
    # condition
    if f.get("condition"):
        q = q.filter(Product.condition == f["condition"])
    # site whitelist/blacklist
    include = f.get("sites_include")
    exclude = f.get("sites_exclude")
    if include:
        q = q.filter(Product.site.in_(include))
    if exclude:
        q = q.filter(~Product.site.in_(exclude))

    # vector similarity (semantic)
    query_emb = embed(f.get("semantic", ""))
    q = q.order_by(Product.embedding.cosine_distance(query_emb))

    return q.limit(limit).all()