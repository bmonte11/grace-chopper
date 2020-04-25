import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function({products, history}) {
  return (
    <ul className="list-group flex-md-row flex-wrap">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img
            className="card-img-top"
            src={product.photo}
            alt="Card image cap"
            onClick={() => history.push(`/products/${product.id}`)}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            <a href="#" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      ))}
    </ul>
  )
})
