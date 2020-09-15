import React, {Component} from 'react'
import axios from 'axios'
import {CartItem} from '.'
import {fetchCart, checkoutCart, checkoutGuest} from '../store/cart'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
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
    return (
      <div>
        <h1>Cart</h1>
        <div className="list-group list-group-sm">
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
        <div className="total">
          This is the calculation for the total price{' '}
        </div>

        <div className="total">Grand Total </div>
        {/* <button
          type="button"
          onClick={async () => {
            await axios.get('/api/orders/cart')
          }}
        >
          {' '}
          On Click
        </button> */}
        <button type="submit" onClick={this.handleSubmit}>
          Checkout
        </button>
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
