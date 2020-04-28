import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/single-product'
import {fetchProductReviews} from '../store/single-product-reviews'
import {SingleReview} from '.'
import changeQuantity from '../utils/changeQuantity'
import {postToCart, fetchCart, updateQuantity} from '../store/cart'

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
    await this.props.getProduct(productId)
    await this.props.getReviews(productId)
  }

  handleSubmit(event) {
    event.preventDefault()
    const {product, cart} = this.props
    // console.log('orderId', cart.orderId)
    // if (!cart.id && cart.items[0]) {
    //   const found = cart.items.find(
    //     item => item.product.productId === this.props.match.params.productId
    //   )
    //   console.log('found', found)
    //   if (found) {
    //     this.props.updateQuantity(found, this.state.quantityToAdd)
    //   }
    // }

    try {
      let orderItem = {
        quantity: this.state.quantityToAdd,
        productId: this.props.match.params.productId,
        orderId: this.props.cart.id
      }
      this.props.updateCart(orderItem)
      this.props.getCart()
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
              {/* if this number is greater than database number, disable button */}
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
  updateCart: orderItem => dispatch(postToCart(orderItem)),
  getCart: () => dispatch(fetchCart()),
  updateQuantity: (item, quantity) => dispatch(updateQuantity(item, quantity))
})

export default connect(mapState, mapDispatch)(SingleProduct)
