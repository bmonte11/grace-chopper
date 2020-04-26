import React, {Component} from 'react'
import {changeUserStatus} from '../store/users'
import {connect} from 'react-redux'

// This function will handle conditional rendering of the admin/customer field
// based on user's admin status and whether the admin intends to edit the status

class UserTableRow extends Component {
  constructor(props) {
    super(props)
    this.windowConfirm = this.windowConfirm.bind(this)
    this.handleAdminRendering = this.handleAdminRendering.bind(this)
  }
  windowConfirm = event => {
    if (window.confirm("Change this user's admin privileges?")) {
      console.log(this.props.user.id, event.target.value)
      this.props.updateUserStatus(this.props.user.id, event.target.value)
    }
  }

  handleAdminRendering = (editStatus, user) => {
    if (editStatus) {
      return (
        <select defaultValue={user.isAdmin} onChange={this.windowConfirm}>
          <option value={true}>Admin</option>
          <option value={false}>Customer</option>
        </select>
      )
    } else {
      return user.isAdmin ? 'Admin' : 'Customer'
    }
  }

  render() {
    const {user} = this.props
    return (
      <tr>
        <td>{user.id}</td>
        <td>{this.handleAdminRendering(this.props.editUsers, user)}</td>
        <td>{user.email}</td>
        <td>{`${user.firstName} ${user.lastName}`}</td>
        <td>Orders.....Umm</td>
      </tr>
    )
  }
}

const mapDispatch = dispatch => ({
  updateUserStatus: (userId, status) =>
    dispatch(changeUserStatus(userId, status))
})

export default connect(null, mapDispatch)(UserTableRow)
