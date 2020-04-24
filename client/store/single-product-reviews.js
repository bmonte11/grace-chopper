import axios from 'axios'

const SET_SINGLE_PRODUCT_REVIEWS = 'SET_SINGLE_PRODUCT_REVIEWS'

const setSingleProductReviews = reviews => ({
  type: SET_SINGLE_PRODUCT_REVIEWS,
  reviews
})

export const fetchProductReviews = productId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/reviews/products/${productId}`)
      const reviews = response.data
      const action = setSingleProductReviews(reviews)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT_REVIEWS:
      return action.reviews
    default:
      return state
  }
}
