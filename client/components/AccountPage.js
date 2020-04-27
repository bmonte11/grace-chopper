import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {AdminDashboard} from '.'

const AccountPage = props => {
  return (
    <div id="account-page">
      <h2>My Account</h2>
      <div>Below link will be conditionally rendered laaaaater</div>
      <NavLink to="/account/admin">Admin Dashboard</NavLink>
    </div>
  )
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(AccountPage)
