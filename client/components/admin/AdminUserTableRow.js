import React, {Component} from 'react'
import {changeUserStatus} from '../../store/users'
import {connect} from 'react-redux'

// I'm not sure how to handle the UI response to this functionality. As of now, there
// are the following bugs:
// 1. list doesn't rerender when change is made (problem with thunks)
// 2. When list does rerender, the order is changed (should be sorted by id by default)
// 3. When selecting "no" in confirm, the select element still changes even though
//    put request isn't made
class UserTableRow extends Component {
  constructor(props) {
    super(props)
    this.windowConfirm = this.windowConfirm.bind(this)
    this.handleAdminRendering = this.handleAdminRendering.bind(this)
  }
  windowConfirm = event => {
    if (window.confirm("Change this user's admin privileges?")) {
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
