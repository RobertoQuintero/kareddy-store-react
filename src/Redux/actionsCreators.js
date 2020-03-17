import Axios from "axios"
import {GET_ALL_PRODUCTS, GET_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, MANAGE_MODAL} from './actions'

export const getAllProducts = () =>dispatch =>{
  Axios.get('https://kareddy-store.herokuapp.com/jsonProducts' || `http://localhost:3001/products`)
    .then(result=>{
      console.log(result.data.products)
      dispatch({
        type: GET_ALL_PRODUCTS,
        products: result.data.products
      })
    })
    .catch(err => console.log(err))
}
export const getProduct = id => dispatch =>{
  Axios.get(`https://kareddy-store.herokuapp.com/jsonProducts/${id}`)
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