import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {ListProducts} from './index'

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div clasname="products">
        <ListProducts products={this.props.products} />
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
