import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'
import {ListOrders} from './index'

class AllOrders extends Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    const orders = this.props.orders
    return (
      <div className="orders">
        <h1>Your Orders</h1>
        <ListOrders orders={orders} />;
      </div>
    )
  }
}

const mapState = state => {
  return {orders: state.orders}
}

const mapDispatch = dispatch => {
  return {
    getOrders: () => dispatch(fetchOrders())
  }
}

export default connect(mapState, mapDispatch)(AllOrders)
