import React from 'react'
// import changeQuantity from '../utils/changeQuantity'

export const CartItem = function({item}) {
  return (
    <div className="card">
      <img src={item.photo} className="cart-card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">Quantity: {item.quantity}</div>
        <div className="total">Item Total: {item.price} </div>
        <a href="#" className="btn btn-danger btn-sm">
          Remove from Cart
        </a>
      </div>
    </div>
  )
}

export default CartItem
