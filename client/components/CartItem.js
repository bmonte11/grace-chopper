import React from 'react'
import axios from 'axios'
import changeQuantity from '../utils/changeQuantity'

export const CartItem = function({item}) {
  return (
    <div className="card">
      <img src={item.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">Quantity: {item.quantity}</div>
        <div className="total">
          This is the calculation for the total price of this one item{' '}
        </div>
        <a href="#" className="btn btn-danger btn-sm">
          Remove from Cart
        </a>
      </div>
    </div>
  )
}
