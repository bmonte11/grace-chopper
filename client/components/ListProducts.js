import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function(props) {
  return props.products.map(product => (
    <div id={product.name} key={product.id}>
      <div onClick={() => props.history.push(`/products/${product.id}`)}>
        {product.name}{' '}
      </div>
      <h3>{`$${product.price / 100}`}</h3>
      <button type="submit" id="addToCart">
        Add to cart
      </button>
    </div>
  ))
})
