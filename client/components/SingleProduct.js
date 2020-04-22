import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/single-product'

const dummyData = {
  name: 'Knife I think',
  description:
    'A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife A knife ',
  quantity: 99,
  price: 99.99
}

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityToAdd: 1
    }
    this.changeQuantity = this.changeQuantity.bind(this)
  }

  async componentDidMount() {
    await this.props.getProduct(this.props.match.params.productId)
    console.log(this.props)
  }

  changeQuantity(operation) {
    const currentQuantity = this.state.quantityToAdd
    console.log(this.state)
    switch (operation) {
      case 'increment':
        this.setState({quantityToAdd: currentQuantity + 1})
        console.log(this.state)
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
          Eventually, a list of reviews will render down here.
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.singleProduct
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
