import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/single-product'
import {fetchProductReviews} from '../store/single-product-reviews'
import {SingleReview} from '.'
import changeQuantity from '../utils/changeQuantity'
import axios from 'axios'
import {postToCart} from '../store/cart'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityToAdd: 1
    }
    this.changeQuantity = changeQuantity.bind(this)
  }

  async componentDidMount() {
    const productId = this.props.match.params.productId
    console.log(this.props.match.params, 'is the order id here?')
    await this.props.getProduct(productId)
    await this.props.getReviews(productId)
    // await this.props.updateCart(this.props.cart.id, productId)
    console.log(this.props.cart.id, 'order id we want?')
    console.log(productId, 'product id we want?')
  }

  handleSubmit(event) {
    event.preventDefault()
    try {
      let orderItem = {
        quantity: this.state.quantityToAdd,
        productId: this.props.match.params.productId
      }
      this.props.updateCart(orderItem)

      // console.log(this.props, 'after the axios request')
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const {product, cart} = this.props
    return (
      <div id="single-product">
        <div id="single-product-info">
          <div id="single-product-info-left">
            <div id="single-product-image-container">
              <img id="single-product-image" src={product.photo} />
            </div>
          </div>
          <div id="single-product-info-right">
            <h2>{product.name}</h2>
            <h3>{`$${product.price / 100}`}</h3>
            <div id="single-product-addtocart">
              <div onClick={() => this.changeQuantity('decrement')}>-</div>
              <div>{this.state.quantityToAdd}</div>
              <div onClick={() => this.changeQuantity('increment')}>+</div>
              <div
                className="add-to-cart-button"
                onClick={e => this.handleSubmit(e)}
              >
                Add To Cart
              </div>
            </div>
          </div>
        </div>
        <div id="single-product-description">{product.description}</div>
        <div id="single-product-reviews">
          <h3>{`Reviews of ${product.name}`}</h3>
          {this.props.reviews.map(review => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.singleProduct,
  reviews: state.singleProductReviews,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(fetchSingleProduct(id)),
  getReviews: id => dispatch(fetchProductReviews(id)),
  updateCart: orderItem => dispatch(postToCart(orderItem))
})

export default connect(mapState, mapDispatch)(SingleProduct)
