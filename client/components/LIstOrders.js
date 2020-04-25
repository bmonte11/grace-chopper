import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(function({orders}) {
  return (
    <ul className="list-group" id="list-orders">
      {orders.map(order => (
        <div className="card" key={order.id}>
          <div className="card-header">
            <h5>Order Placed: {order.updatedAt}</h5>
            <h5>Total: </h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      ))}
    </ul>
  )
})
