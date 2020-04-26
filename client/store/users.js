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
      const users = response.data
      const action = setUsers(users)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

// I'm wondering what the best way to handle this is.
// Should I call fetch users like this? -Jonah
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
