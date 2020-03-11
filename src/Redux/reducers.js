import { GET_ALL_PRODUCTS, GET_PRODUCT } from "./actions"

export const productsReducer = (state={},action) =>{
  if(action.type === GET_ALL_PRODUCTS){
    return{
      ...state,
      products: action.products
    }
  }
  if(action.type === GET_PRODUCT){
    return {
      ...state,
      product: action.product
    }
  }
  return state
}