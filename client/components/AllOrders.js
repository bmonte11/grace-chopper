import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'
import {ListProducts} from './index'

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div className="products">
        {/* <ListOrders products={this.props.orders} /> */}
      </div>
    )
  }
}

const mapState = state => {
  return {products: state.orders}
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchOrders())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
