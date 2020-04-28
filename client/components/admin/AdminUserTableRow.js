import React, {Component} from 'react'
import {changeUserStatus, fetchUsers} from '../../store/users'
import {connect} from 'react-redux'

class UserTableRow extends Component {
  constructor(props) {
    super(props)
    this.windowConfirm = this.windowConfirm.bind(this)
    this.handleAdminRendering = this.handleAdminRendering.bind(this)
  }

  windowConfirm = async event => {
    const prevValue = event.target.value
    if (window.confirm("Change this user's admin privileges?")) {
      await this.props.updateUserStatus(this.props.user.id, event.target.value)
      this.props.toggleParentEditStatus()
      this.props.getUsers()
    } else {
      event.target.value = prevValue
      this.props.toggleParentEditStatus()
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
      <tr className="table-row">
        <td>{user.id}</td>
        <td>{this.handleAdminRendering(this.props.editUsers, user)}</td>
        <td>{user.email}</td>
        <td>{`${user.firstName} ${user.lastName}`}</td>
      </tr>
    )
  }
}

const mapState = state => ({
  users: state.users
})

const mapDispatch = dispatch => ({
  updateUserStatus: (userId, status) =>
    dispatch(changeUserStatus(userId, status)),
  getUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(UserTableRow)
