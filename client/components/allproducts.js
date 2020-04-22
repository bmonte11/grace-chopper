import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../store/products'

class AllProducts extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    console.log('props', this.props)
    return (
      <div clasName="products">
        {this.props.products.map(product => (
          <div key={product.id}>
            {' '}
            {product.name} {product.price} <img src={product.imageUrl} />
          </div>
        ))}
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
