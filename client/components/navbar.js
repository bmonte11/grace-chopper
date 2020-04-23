import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({isLoggedIn}) => {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <i className="fas fa-utensils" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  to="/home"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-link"
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Account
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Log In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/signup"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto" />
              <li className="nav-item">
                <NavLink
                  to="/orders"
                  className="nav-link"
                  activeClassName="active"
                >
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link"
                  activeClassName="active"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
