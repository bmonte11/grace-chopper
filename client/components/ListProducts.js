import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function({products, history}) {
  return (
    <div>
      <ul
        className="d-flex align-content-start flex-wrap"
        id="products-container"
      >
        {products.map(product => (
          <li className="card" key={product.id} id="products-card">
            <img
              className="card-img-top"
              src={product.photo}
              alt="Card image cap"
              onClick={() => history.push(`/products/${product.id}`)}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <p className="card-text">{product.rating}/5 stars</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
})
