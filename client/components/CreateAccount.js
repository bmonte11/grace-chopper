import React from 'react'
import axios from 'axios'

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit() {
    event.preventDefault()
    try {
      // this should be wrapped in a thunk
      await axios.post('/api/users', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        address: this.state.address,
        password: this.state.password,
        registered: true
      })
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: ''
      })
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div id="main-add-user">
        <div id="add-user-box">
          <h1>Add User</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="add-user-form">
              First Name:{' '}
              <input
                className={this.state.firstName.length ? '' : 'error'}
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="add-user-form">
              Last Name:{' '}
              <input
                className={this.state.lastName.length ? '' : 'error'}
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="add-user-form">
              E-mail:{' '}
              <input
                className={this.state.email.length ? '' : 'error'}
                type="text"
                placeholder="E-mail"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="add-user-form">
              Address:{' '}
              <input
                className={this.state.address.length ? '' : 'error'}
                type="text"
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="add-user-form">
              Password:{' '}
              <input
                className={this.state.password.length ? '' : 'error'}
                type="text"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </label>
            <button
              type="submit"
              // disabled={
              //   !(
              //     this.state.firstName &&
              //     this.state.lastName &&
              //     this.state.email &&
              //     this.state.address &&
              //     this.state.password
              //   )
              // }
            >
              Submit
            </button>
          </form>
        </div>
        {/* <a href="/auth/google">Sign-Up with Google</a> */}
      </div>
    )
  }
}
