import Axios from "axios"
import {GET_ALL_PRODUCTS, GET_PRODUCT} from './actions'

export const getAllProducts = () =>dispatch =>{
  Axios.get(`http://localhost:3001/products`)
    .then(result=>{
      dispatch({
        type: GET_ALL_PRODUCTS,
        products: result.data
      })
    })
    .catch(err => console.log(err))
}
export const getProduct = _id => dispatch =>{
  Axios.get(`http://localhost:3001/products/${_id}`)
    .then(result=>{
      dispatch({
        type: GET_PRODUCT,
        product: result.data
      })
    })
    .catch(err => console.log(err))
}