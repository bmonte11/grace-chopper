import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = products => {
  return {type: SET_PRODUCTS, products: products}
}

export function fetchProducts() {
  console.log('in the thunk')
  return async function(dispatch) {
    try {
      const result = await axios.get('/api/products')
      dispatch(
        setProducts([{id: 1, name: 'coolknife', imageUrl: 'google.com'}])
      )
    } catch (err) {
      console.log(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
