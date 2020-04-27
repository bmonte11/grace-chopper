import React, {Component} from 'react'
import {AdminProductsListRow} from '..'
import {connect} from 'react-redux'
import {fetchProducts} from '../../store/products'

class AdminProductsList extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div id="admin-products-list">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Category</th>
              <th>Origin</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => {
              return <AdminProductsListRow key={product.id} product={product} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AdminProductsList)
