import axios from 'axios'

const SET_ORDERS = 'SET_ORDERS'

export const setOrders = orders => {
  return {type: SET_ORDERS, orders}
}

export function fetchOrders() {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(setOrders(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders
    default:
      return state
  }
}
