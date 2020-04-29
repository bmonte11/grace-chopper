import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = products => {
  return {type: SET_PRODUCTS, products: products}
}

export function fetchProducts(pagination) {
  return async function(dispatch) {
    try {
      const {data} = await axios.post('/api/products', pagination)
      dispatch(setProducts(data.rows))
    } catch (err) {
      console.error(err)
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

// const SET_PRODUCTS = 'SET_PRODUCTS';
// const SET_COUNT = 'SET_COUNT';

// export const setProducts = (products) => {
// 	return { type: SET_PRODUCTS, products };
// };

// export const setCount = (count) => {
// 	return { type: SET_COUNT, count };
// };

// export function fetchProducts(pagination) {
// 	return async function(dispatch) {
// 		try {
// 			const result = await axios.post('/api/products', pagination);
// 			dispatch(setProducts(result.data.rows));
// 			dispatch(setCount(result.data.count));
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};
// }

// export default function(state = { products: [], count: 0 }, action) {
// 	switch (action.type) {
// 		case SET_PRODUCTS:
// 			return { ...state, products: action.products };
// 		case SET_COUNT:
// 			return { ...state, count: action.count };
// 		default:
// 			return state;
// 	}
// }
