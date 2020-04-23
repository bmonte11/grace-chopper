import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/single-product'
import {fetchProductReviews} from '../store/single-product-reviews'
import SingleReview from './SingleReview'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityToAdd: 1
    }
    this.changeQuantity = this.changeQuantity.bind(this)
  }

  async componentDidMount() {
    const productId = this.props.match.params.productId
    await this.props.getProduct(productId)
    await this.props.getReviews(productId)
  }

  changeQuantity(operation) {
    const currentQuantity = this.state.quantityToAdd
    switch (operation) {
      case 'increment':
        this.setState({quantityToAdd: currentQuantity + 1})
        break
      case 'decrement':
        if (this.state.quantityToAdd > 1) {
          this.setState({quantityToAdd: currentQuantity - 1})
        }
        break
      default:
        break
    }
  }

  addToCart() {}

  render() {
    const {product} = this.props
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
              <div className="add-to-cart-button">Add To Cart</div>
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
  reviews: state.singleProductReviews
  // cart: state.cart
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(fetchSingleProduct(id)),
  getReviews: id => dispatch(fetchProductReviews(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
