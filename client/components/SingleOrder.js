import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/singleOrder'

class SingleOrder extends Component {
  componentDidMount() {
    this.props.getSingleOrder(this.props.orderId)
  }

  render() {
    const items = this.props.singleOrder.items || []
    console.log('ITEMS ARRAY!!:', items)
    console.log('PROPS!!:', this.props.singleOrder)
    // return <div>{this.props.singleOrder.status}</div>;
    return items.map(item => {
      return <div key={item.id} />
    })
  }
}

const mapState = state => ({
  singleOrder: state.singleOrder
})

const mapDispatch = dispatch => ({
  getSingleOrder: id => dispatch(fetchSingleOrder(id))
})

export default connect(mapState, mapDispatch)(SingleOrder)
