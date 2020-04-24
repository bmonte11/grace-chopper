import axios from 'axios'

const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

export const setCart = cart => {
  return {
    type: SET_CART,
    cart
  }
}

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  }
}

export function fetchCart() {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/orders/cart')
      const cart = data[0]
      console.log(cart, 'this is the cart from the fetchCart thunk')
      dispatch(setCart(cart))
    } catch (err) {
      console.log(err)
    }
  }
}

export function postToCart(productId) {
  console.log(productId, 'productId in postToCart thunk')
  return async function(dispatch) {
    try {
      const {data} = await axios.post('/api/orders/cart', {
        params: {productId: productId}
      })
      dispatch(addToCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, action.item]
    default:
      return state
  }
}
