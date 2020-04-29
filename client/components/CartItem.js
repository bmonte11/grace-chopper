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
    const {item} = this.props
    console.log(item)
    return (
      <div className="card">
        {!item.product ? (
          <div>Loading...</div>
        ) : (
          <div>
            <img
              src={item.product.photo}
              className="cart-card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.product.name}</h5>
              <div className="card-text">Quantity: {item.quantity}</div>
              <div className="total">
                Item Total: {item.product.price.toFixed(2)}{' '}
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => this.handleRemove(this.props.item.id)}
                >
                  Delete from Cart
                </button>
              </div>
            </div>
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
