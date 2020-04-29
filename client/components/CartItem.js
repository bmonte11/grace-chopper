import React from 'react'
import {removeItem, fetchCart, setCart} from '../store/cart'
import {connect} from 'react-redux'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  async handleRemove(id) {
    await this.props.remove(id)
    this.props.getCart()
  }
  render() {
    const {item} = this.props
    return (
      <div className="card cart-card">
        {!item.product ? (
          <div>Loading...</div>
        ) : (
          <div className="cart-item">
            <img
              src={item.product.photo}
              className="cart-card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.product.name}</h5>
              <div className="card-text">Quantity: {item.quantity}</div>
              <div>Item Price: ${item.product.price} </div>
              <div>Item Total: ${item.product.price * item.quantity}</div>
              <div>
                <button
                  className="cart-button"
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

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => {
  return {
    remove: id => dispatch(removeItem(id)),
    getCart: () => dispatch(fetchCart()),
    setCart: cart => dispatch(setCart(cart))
  }
}

export default connect(mapState, mapDispatch)(CartItem)
