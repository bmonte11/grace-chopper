import React from 'react'
import {Link} from 'react-router-dom'

export const ListProducts = function(props) {
  console.log(props)
  return props.products.map(product => (
    <div id={product.name} key={product.id}>
      <Link to={`products/${product.id}`}>{product.name} </Link>
      {product.price} <img src={product.imageUrl} />
      <button type="submit" id="addToCart">
        Add to cart
      </button>
    </div>
  ))
}
