import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {ListProducts, Paginate} from './index'

class AllProducts extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      productsPerPage: 25,
      // keep track of total items in database to send to pagination comopnent
      totalProducts: 200
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    const pages = {
      page: this.state.currentPage,
      pageSize: this.state.productsPerPage
    }
    this.props.getProducts(pages)
  }

  handleChange(num) {
    this.setState({productsPerPage: num})
  }

  render() {
    return (
      <div clasname="products">
        <div>
          <Paginate
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.productsPerPage}
            totalItems={this.state.totalProducts}
            handleChange={this.handleChange}
          />
        </div>
        <ListProducts products={this.props.products} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: pagination => dispatch(fetchProducts(pagination))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
