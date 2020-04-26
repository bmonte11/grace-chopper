import React from 'react'
import {NavLink} from 'react-router-dom'

const AdminDashboard = props => {
  return (
    <div id="admin-functions">
      <NavLink to="/account/admin/users">Users Dashboard</NavLink>
      <NavLink to="/account/admin/products">Products Dashboard</NavLink>
    </div>
  )
}

export default AdminDashboard
