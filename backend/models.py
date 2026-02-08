from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from pgvector.sqlalchemy import Vector
import enum

Base = declarative_base()

class Product(Base):
    __tablename__ = 'products'
    id          = Column(Integer, primary_key=True, index=True)
    title       = Column(String, nullable=False)
    brand       = Column(String, index=True)
    price       = Column(Float)
    size        = Column(String)
    colour      = Column(String, index=True)
    garment     = Column(String, index=True)
    material    = Column(String)
    condition   = Column(String)
    site        = Column(String, index=True)
    image_url   = Column(String)
    deeplink    = Column(String)
    embedding   = Column(Vector(768))

class ActionType(str, enum.Enum):
    CLICK = "click"
    LIKE = "like"
    DISLIKE = "dislike"
    SAVE = "save"

class UserPreference(Base):
    __tablename__ = "user_preferences"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, index=True)  # link to your auth later
    product_id = Column(Integer, ForeignKey("products.id"))
    action = Column(Enum(ActionType))
    created_at = Column(DateTime, server_default=func.now())

class UserProfile(Base):
    __tablename__ = "user_profiles"
    user_id = Column(Integer, primary_key=True)
    preference_vector = Column(Vector(768))  # averaged from liked items
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())