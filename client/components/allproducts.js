import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {ListProducts, Paginate} from './index'
import Dropdown from 'react-bootstrap/Dropdown'

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
    this.setState({currentPage: num})
    const pages = {
      page: this.state.currentPage,
      pageSize: this.state.productsPerPage
    }
    this.props.getProducts(pages)
  }

  filterItemesPerPage() {}

  render() {
    return (
      <div clasname="products">
        <div id="product-page-options">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Items Per Page
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">25</Dropdown.Item>
              <Dropdown.Item href="#/action-2">50</Dropdown.Item>
              <Dropdown.Item href="#/action-2">100</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Paginate
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.productsPerPage}
            totalItems={this.state.totalProducts}
            handleChange={this.handleChange}
          />
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Filter Results
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Price - Descending
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Price - Ascending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Filter Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-3">Western Knives</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Japanese Knives</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Other Knives</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
