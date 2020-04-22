import axios from 'axios'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

const initialState = {}

const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

export const fetchSingleProduct = productId => {
  return async dispatch => {
    const response = await axios.get(`/api/products/${productId}`)
    console.log('response in thunk: ', response)
    const product = response.data
    const action = setSingleProduct(product)
    dispatch(action)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
