import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function({products, history}) {
  return (
    <div id="products-list-container">
      <ul className="d-flex align-content-start flex-wrap" id="products-list">
        {products.map(product => (
          <li
            className="card products-card"
            key={product.id}
            onClick={() => history.push(`/products/${product.id}`)}
          >
            <img
              className="card-img-top"
              src={product.photo}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
})
