import React, {Component} from 'react'
import {fetchUsers} from '../../store/users'
import {AdminUserTableRow} from '..'
import {connect} from 'react-redux'

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editUsers: false
    }
    this.toggleEditUsers = this.toggleEditUsers.bind(this)
  }

  toggleEditUsers() {
    const prev = this.state.editUsers
    this.setState({editUsers: !prev})
  }

  adminify() {}

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <div className="admin-content">
        <div id="users-header">
          <h2>Users</h2>
          <div className="link-button" onClick={this.toggleEditUsers}>
            Edit
          </div>
        </div>
        <table id="users-table">
          <thead>
            <tr className="table-row">
              <th>ID</th>
              <th>Account Type</th>
              <th>Email</th>
              <th>Name</th>
              <th />
            </tr>
            {this.props.users.map(user => {
              return (
                <AdminUserTableRow
                  key={user.id}
                  user={user}
                  editUsers={this.state.editUsers}
                  toggleParentEditStatus={this.toggleEditUsers}
                />
              )
            })}
          </thead>
        </table>
      </div>
    )
  }
}

const mapState = state => ({
  users: state.users
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(UsersList)
