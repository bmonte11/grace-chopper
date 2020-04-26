import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function({orders}) {
  return (
    <div>
      <h1>Your Orders</h1>
      <ul className="list-group">
        {orders.map(order => (
          <div className="card" key={order.id}>
            <div className="card-header">
              <h5>Order Placed: {order.updatedAt}</h5>
              <h5>Total: </h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {order.status === 'completed' ? 'Delivered' : 'Shipped'}
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                View Order
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        ))}
      </ul>
    </div>
  )
})
