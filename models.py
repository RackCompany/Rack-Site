from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from pgvector.sqlalchemy import Vector

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
