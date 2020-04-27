import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {AdminUsersList, AdminProductsList, AdminSingleProduct} from '..'

const AdminDashboardRoutes = props => {
  return (
    <Switch>
      <Route path="/account/admin/users" component={AdminUsersList} />
      <Route
        exact
        path="/account/admin/products"
        component={AdminProductsList}
      />
      <Route
        path="/account/admin/products/:productId"
        component={AdminSingleProduct}
      />
    </Switch>
  )
}

export default AdminDashboardRoutes
