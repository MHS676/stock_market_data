from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional, List
import models, schemas
from database import get_db

router = APIRouter()

@router.post("/trade/", response_model=schemas.TradeResponse)
def create_trade(trade: schemas.TradeCreate, db: Session = Depends(get_db)):
    """
    Create a new trade entry.
    """
    new_trade = models.TradeData(**trade.dict())
    db.add(new_trade)
    db.commit()
    db.refresh(new_trade)
    return new_trade

@router.get("/trade/", response_model=schemas.PaginatedTradeResponse)
def get_trades(
    db: Session = Depends(get_db),
    trade_code: Optional[str] = Query(None, description="Filter by trade code"),
    page: int = Query(1, ge=1, description="Page number"),
    limit: int = Query(10, ge=1, le=100, description="Number of items per page"),
):
    """
    Get trades with pagination and optional trade code filtering.
    """
    query = db.query(models.TradeData)

    if trade_code:
        query = query.filter(models.TradeData.trade_code == trade_code)

    total_count = query.count()
    trades = query.offset((page - 1) * limit).limit(limit).all()

    return {
        "total": total_count,
        "page": page,
        "limit": limit,
        "trades": trades, 
    }

@router.get("/trade/{trade_id}", response_model=schemas.TradeResponse)
def get_trade(trade_id: int, db: Session = Depends(get_db)):
    """
    Get a specific trade by its ID.
    """
    trade = db.query(models.TradeData).filter(models.TradeData.id == trade_id).first()
    if not trade:
        raise HTTPException(status_code=404, detail="Trade not found")
    return trade

@router.put("/trade/{trade_id}", response_model=schemas.TradeResponse)
def update_trade(trade_id: int, trade_data: schemas.TradeUpdate, db: Session = Depends(get_db)):
    """
    Update a trade by ID.
    """
    trade = db.query(models.TradeData).filter(models.TradeData.id == trade_id).first()
    if not trade:
        raise HTTPException(status_code=404, detail="Trade not found")

    for key, value in trade_data.dict(exclude_unset=True).items():
        setattr(trade, key, value)

    db.commit()
    db.refresh(trade)
    return trade

@router.delete("/trade/{trade_id}")
def delete_trade(trade_id: int, db: Session = Depends(get_db)):
    """
    Delete a trade by ID.
    """
    trade = db.query(models.TradeData).filter(models.TradeData.id == trade_id).first()
    if not trade:
        raise HTTPException(status_code=404, detail="Trade not found")

    db.delete(trade)
    db.commit()
    return {"message": "Trade deleted successfully"}
