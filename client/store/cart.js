import axios from 'axios'
import {fetchProducts} from './products'

const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

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

export const updateQuantity = function(item, quantityToAdd) {
  return {
    type: UPDATE_QUANTITY,
    item,
    quantityToAdd
  }
}

export function fetchCart() {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/orders/cart')
      const cart = data
      dispatch(setCart(cart))
    } catch (err) {
      console.log(err)
    }
  }
}

export function postToCart(orderItem) {
  return async function(dispatch) {
    try {
      const response = await axios.post('/api/orders/cart', {
        productId: orderItem.productId,
        quantity: orderItem.quantity,
        orderId: orderItem.orderId
      })
      if (response.status === 200) {
        dispatch(addToCart(response.data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export function removeItem(itemId) {
  console.log('itemId in thunk', itemId)
  return async function(dispatch) {
    try {
      const response = await axios.delete('/api/orders/cart', {
        data: {
          itemId
        }
      })
      if (response.status === 204) {
        dispatch(fetchCart())
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export function checkoutCart(cart) {
  return function(dispatch) {
    Promise.all(
      cart.items.map(item => {
        return axios.put(`/api/items/${item.id}`, {
          salePrice: item.product.price
        })
      })
    )
      .then(
        Promise.all(
          cart.items.map(item => {
            return axios.put(`/api/products/${item.productId}/decrement`, {
              quantity: item.quantity
            })
          })
        )
      )
      .then(axios.put(`/api/orders/${cart.id}`, {status: 'shipping'}))
      // How do we error handle
      .catch(console.log('error'))
    dispatch(fetchCart())
    dispatch(fetchProducts())
  }
}

export function checkoutGuest(cart) {
  return async function(dispatch) {
    console.log('inside thunk checkoutGuest')
    const response = await axios.post(`/api/orders/guest`, {
      status: 'shipping',
      userId: -1
    })
    const newOrder = response.data
    console.log(newOrder, 'new order from checkoutGuest')
    Promise.all(
      cart.items.map(item => {
        return axios.post('/api/items', {
          salePrice: item.product.price,
          quantity: item.quantity,
          productId: item.product.productId,
          orderId: newOrder.id
        })
      })
    )
      .then(
        Promise.all(
          cart.items.map(item => {
            return axios.put(
              `/api/products/${item.product.productId}/decrement`,
              {
                quantity: item.quantity
              }
            )
          })
        )
      )
      .then(() => axios.put('/api/guest/cart'))
      .catch(error => console.error(error))
    dispatch(fetchProducts())
  }
}

export default function(state = {items: []}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case ADD_TO_CART:
      return {...state, items: [...state.items, action.item]}
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(function(item) {
          if (item.id === action.item.id) {
            item.quantity = item.quantity + action.quantityToAdd
            return item
          } else {
            return item
          }
        })
      }
    default:
      return state
  }
}
