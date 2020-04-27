import React, {Component} from 'react'
import axios from 'axios'
import {CartItem} from '.'
import {fetchCart, checkoutCart} from '../store/cart'
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
    this.props.checkoutCart(this.props.cart)
    this.props.history.push('/order/confirmation')
    // Snapshot sale price and update order items: check
    // Update order status to shipping
    // Subtract from products stock: check
    // Fetch cart
    // Fetch products
    // Redirect
  }

  render() {
    let cart = this.props.cart
    console.log(cart, 'this.props.cart in the main Cart Component')
    return (
      <div>
        <h1>This is the Cart</h1>
        <div className="theCart">
          {!cart.items ? (
            <div>Loading... </div>
          ) : (
            cart.items.map(item => {
              return <CartItem item={item} key={item.id} />
            })
          )}
        </div>
        <div className="total">
          This is the calculation for the total price{' '}
        </div>
        <button
          type="button"
          onClick={async () => {
            await axios.get('/api/orders/cart')
          }}
        >
          {' '}
          On Click
        </button>
        <button type="submit" onClick={this.handleSubmit}>
          Checkout
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    checkoutCart: cart => dispatch(checkoutCart(cart))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
