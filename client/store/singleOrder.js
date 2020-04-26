import axios from 'axios'

const SET_SINGLE_ORDER = 'SET_SINGLE_ORDERS'

export const setSingleOrder = singleOrder => {
  return {type: SET_SINGLE_ORDER, singleOrder}
}

export function fetchSingleOrder() {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/orders/:id')
      dispatch(setSingleOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_ORDER:
      return action.singleOrder
    default:
      return state
  }
}
