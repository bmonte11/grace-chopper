import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {AdminUsersList, AdminProductsList, AdminSingleProduct} from '..'

const getStarted = () => {
  return <div>Choose an option from the menu on the left to get started</div>
}

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
      <Route component={getStarted} />
    </Switch>
  )
}

export default AdminDashboardRoutes
