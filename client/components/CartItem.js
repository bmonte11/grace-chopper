import React from 'react'
import {removeItem, fetchCart} from '../store/cart'
import {connect} from 'react-redux'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove(id) {
    this.props.remove(id)
    this.props.getCart()
  }
  render() {
    return (
      <div>
        {!this.props.item.product ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>Name: {this.props.item.product.name}</div>
            <div>Quantity: {this.props.item.quantity}</div>
            <div>
              <button type="button">Button to add to quantity</button>
            </div>
            <div>Price: ${this.props.item.price}</div>
            <div className="total">
              This is the calculation for the total price of this one item{' '}
            </div>
            <div>
              <button
                type="submit"
                onClick={() => this.handleRemove(this.props.item.id)}
              >
                Delete from Cart
              </button>
            </div>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    remove: id => dispatch(removeItem(id)),
    getCart: () => dispatch(fetchCart())
  }
}

export default connect(null, mapDispatch)(CartItem)
