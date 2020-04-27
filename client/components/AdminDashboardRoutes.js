import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {UsersList, AdminProductsList} from '.'

const AdminDashboardRoutes = props => {
  return (
    <Switch>
      <Route path="/account/admin/users" component={UsersList} />
      <Route path="/account/admin/products" component={AdminProductsList} />
    </Switch>
  )
}

export default AdminDashboardRoutes
