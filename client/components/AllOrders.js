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
    return <ListOrders orders={orders} />
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
