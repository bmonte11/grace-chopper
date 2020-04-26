import React from 'react'
import {connect} from 'react-redux'
import {AdminDashboard} from '.'

const AccountPage = props => {
  return (
    <div id="account-page">
      <h2>My Account</h2>
      <div>
        Everything below here will either be rendered conditionally, or a link
        to an admin dashboard will be rendered conditionally. Dunno yet.
      </div>
      <AdminDashboard />
    </div>
  )
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(AccountPage)
