import { GET_ALL_PRODUCTS, GET_PRODUCT, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, MANAGE_MODAL } from "./actions"

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

const initialCart = {
  cart:[]
}
export const cartReducer = (state=initialCart,action)=>{
  if(action.type === ADD_TO_CART){
    if(state.cart.find(p => p.id === action.product.id)) return state
    return {
      ...state,
      cart: state.cart.concat(action.product)
    }
  }
  if(action.type === REMOVE_FROM_CART){
    return {
      ...state,
      cart: state.cart.filter(el => el.id !== action.id)
    }
  }
  if(action.type === CLEAR_CART){
    console.log(action.type)
    return {
      ...state,
      cart: []
    }
  }
  return state
}
const initialModal = {
  modal:false,
  product: []
}
export const modalReducer = (state=initialModal,action)=>{
  if(action.type === MANAGE_MODAL){
    return {
      ...state,
      modal:!state.modal,
      product: action.product
    }
  }
  return state
}