import React from 'react'
// import changeQuantity from '../utils/changeQuantity'

const CartItem = function(props) {
  const price = props.item.price / 100
  const displayPrice = price.toFixed(2)
  return (
    console.log('props', props),
    (
      <div>
        <div>{props.item.name}</div>
        <div>Quantity: {props.item.quantity}</div>
        <div>
          <button type="button">Button to add to quantity</button>
        </div>
        <div>Price: ${displayPrice}</div>
        <div className="total">
          This is the calculation for the total price of this one item{' '}
        </div>
        <div>
          <button type="submit">Delete from Cart</button>
        </div>
        <hr />
      </div>
    )
  )
}

export default CartItem
