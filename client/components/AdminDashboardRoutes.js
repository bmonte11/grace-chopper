import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {UsersList} from '.'

const AdminDashboardRoutes = props => {
  return (
    <Switch>
      <Route path="/account/admin/users" component={UsersList} />
    </Switch>
  )
}

export default AdminDashboardRoutes
