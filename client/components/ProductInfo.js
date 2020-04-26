import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function(props) {
  const product = props.product
  const price = product.price / 100
  const displayPrice = price.toFixed(2)
  return (
    <div id={product.name} key={product.id}>
      <div onClick={() => props.history.push(`/products/${product.id}`)}>
        {product.name}{' '}
      </div>
      <h3>{`$${displayPrice}`}</h3>
      <button type="submit" id="addToCart">
        Add to cart
      </button>
    </div>
  )
})
