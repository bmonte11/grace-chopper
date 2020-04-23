import axios from 'axios'

const SET_CART = 'SET_CART'

export const setCart = cart => {
  return {
    type: SET_CART,
    cart
  }
}

export function fetchCart() {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/orders/cart')
      const cart = data[0]
      dispatch(setCart(cart))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
