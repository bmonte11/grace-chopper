import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/singleOrder'

class SingleOrder extends Component {
  componentDidMount() {
    // this.props.getSingleOrder(this.props.orderId);
  }

  render() {
    const items = this.props.order.items || []
    return items.map(item => {
      return (
        <div className="card" id="orders" key={item.id}>
          <img src={item.product.photo} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{item.product.name}</p>
            <p>${item.salePrice}</p>
          </div>
        </div>
      )
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
