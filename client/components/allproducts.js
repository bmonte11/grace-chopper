import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {ProductInfo} from '.'

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div clasname="products">
        {this.props.products.map(product => {
          return <ProductInfo product={product} key={product.id} />
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {products: state.products}
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
