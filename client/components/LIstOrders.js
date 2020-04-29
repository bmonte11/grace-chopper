import React from 'react'
import {withRouter} from 'react-router-dom'
import SingleOrder from './SingleOrder'
import moment from 'moment'

export default withRouter(function({orders}) {
  return (
    <div>
      <h2>Orders</h2>
      <ul className="list-group">
        {orders.map(order => (
          <div className="card" id="orders-container" key={order.id}>
            <div className="card-header">
              <h5>
                Order Placed:{' '}
                {moment(order.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
              </h5>
              <h5>Total: </h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {order.status === 'completed' ? 'Delivered' : 'Shipped'}
              </h5>
              <div className="d-flex align-content-start flex-wrap">
                <SingleOrder order={order} />
              </div>
              <a href="#" className="btn btn-primary">
                Order Details
              </a>
            </div>
            <div className="card-footer text-muted" />
          </div>
        ))}
      </ul>
    </div>
  )
})
