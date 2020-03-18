import Axios from "axios"
import {GET_ALL_PRODUCTS, GET_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, MANAGE_MODAL} from './actions'

export const getAllProducts = () =>dispatch =>{
  console.log(process.env.REACT_APP_API_URL)
  Axios.get(`${process.env.REACT_APP_API_URL}` || `http://localhost:3001/products`)
    .then(result=>{

      dispatch({
        type: GET_ALL_PRODUCTS,
        products: result.data.products
      })
    })
    .catch(err => console.log(err))
}
export const getProduct = id => dispatch =>{
  Axios.get(`${process.env.REACT_APP_API_URL}/${id}`)
    .then(result=>{
      dispatch({
        type: GET_PRODUCT,
        product: result.data
      })
    })
    .catch(err => console.log(err))
}

export const addToCart = product =>({
  type: ADD_TO_CART,
  product
})

export const removeFromCart = id =>({
  type: REMOVE_FROM_CART,
  id
})

export const clearCart = () =>({
  type: CLEAR_CART
})

export const manageModal = product => ({
  type: MANAGE_MODAL,
  product
})