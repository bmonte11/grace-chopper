import React from 'react'
import {NavLink} from 'react-router-dom'
import {AdminDashboardRoutes} from '.'

const AdminDashboard = props => {
  return (
    <div id="admin-dashboard">
      <div id="admin-dashboard-menu">
        <NavLink to="/account/admin/users">Users Dashboard</NavLink>
        <NavLink to="/account/admin/products">Products Dashboard</NavLink>
      </div>
      <div id="admin-dashboard-content">
        <AdminDashboardRoutes />
      </div>
    </div>
  )
}

export default AdminDashboard
