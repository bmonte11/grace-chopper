import React from 'react'
import {Navlink} from 'react-router-dom'

const AccountPage = props => {
  return (
    <div id="account-page">
      <h2>My Account</h2>
      <div id="admin-functions">
        <div>View/edit users</div>
        <div>View/add/edit products</div>
      </div>
    </div>
  )
}

export default AccountPage
