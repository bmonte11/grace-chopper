import React, {Component} from 'react'
import {CartItem} from '.'
import {fetchCart, checkoutCart, checkoutGuest} from '../store/cart'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getTotal = this.getTotal.bind(this)
  }

  getTotal() {
    return this.props.cart.items.reduce(
      (a, b) => a + b.product.price * b.quantity,
      0
    )
  }

  async componentDidMount() {
    await this.props.getCart()
    this.setState({total: this.getTotal()})
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.props.user.id) {
      this.props.checkoutCart(this.props.cart)
      this.props.history.push('/order/confirmation')
    } else {
      this.props.guestCheckout(this.props.cart)
      this.props.history.push('/order/confirmation')
    }
  }

  render() {
    let cart = this.props.cart
    console.log(cart)
    return (
      <div id="cart">
        <h1>Cart</h1>
        <div className="list-group list-group-sm" id="cart-products">
          {!cart.items ? (
            <div>No items in cart</div>
          ) : (
            cart.items.map(item => {
              return (
                <CartItem
                  item={item}
                  key={item.id}
                  className="list-group-item"
                />
              )
            })
          )}
        </div>
        <div id="cart-summary">
          <div className="total">{`Total: $${this.state.total}`}</div>
          <button
            className="cart-button"
            id="checkout-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Checkout
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    checkoutCart: cart => dispatch(checkoutCart(cart)),
    guestCheckout: cart => dispatch(checkoutGuest(cart))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
