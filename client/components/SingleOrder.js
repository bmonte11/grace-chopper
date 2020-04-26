import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/singleOrder'

class SingleOrder extends Component {
  componentDidMount() {
    this.props.getSingleOrder(this.props.orderId)
  }

  render() {
    // const items = this.props.singleOrder.items;
    return <div>{this.props.singleOrder.status}</div>
    // return this.props.singleOrder.items.map((item) => {
    // 	return <div key={item.id}>{item.product.name}</div>;
    // });
  }
}

const mapState = state => ({
  singleOrder: state.singleOrder
})

const mapDispatch = dispatch => ({
  getSingleOrder: id => dispatch(fetchSingleOrder(id))
})

export default connect(mapState, mapDispatch)(SingleOrder)
