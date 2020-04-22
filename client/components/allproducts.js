import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {ListProducts} from './list-products'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    console.log('props', this.props.products)
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
