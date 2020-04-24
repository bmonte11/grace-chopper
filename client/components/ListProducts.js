import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function(props) {
  return props.products.map(product => (
    <div id={product.name} key={product.id}>
      <div onClick={() => props.history.push(`/products/${product.id}`)}>
        {product.name}{' '}
      </div>
      {product.price}
      <div className="all-products-photo">
        <img src={product.photo} />
      </div>
      <button type="submit" id="addToCart">
        Add to cart
      </button>
    </div>
  ))
})
