import axios from 'axios'

const SET_USERS = 'SET_USERS'

const setUsers = users => ({
  type: SET_USERS,
  users
})

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/users')
      const users = response.data.sort((a, b) => (a.id > b.id ? 1 : -1))
      const action = setUsers(users)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export const changeUserStatus = (userId, status) => {
  return async dispatch => {
    try {
      await axios.put(`/api/users/${userId}`, {isAdmin: status})
      fetchUsers(dispatch)
    } catch (error) {
      console.error(error)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.users]
    default:
      return state
  }
}
