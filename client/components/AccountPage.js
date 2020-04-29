import React from 'react'
import {connect} from 'react-redux'
import {NavLink, Switch, Route} from 'react-router-dom'
import {AllOrders} from '.'

const AccountPage = props => {
  return (
    <div id="account-page">
      <div id="account-menu">
        <NavLink to="/account/orders">My Orders</NavLink>
        {props.user.isAdmin && (
          <NavLink to="/account/admin">Admin Dashboard</NavLink>
        )}
      </div>
      <div>
        <h1>My Account</h1>
        <div id="account-content">
          <Switch>
            <Route path="/account/orders" component={AllOrders} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(AccountPage)
