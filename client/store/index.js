import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import users from './users'
import products from './products'
import singleProduct from './single-product'
import singleProductReviews from './single-product-reviews'
import cart from './cart'
import orders from './orders'
import singleOrder from './singleOrder'

const reducer = combineReducers({
  user,
  users,
  products,
  singleProduct,
  singleProductReviews,
  cart,
  orders,
  singleOrder
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
