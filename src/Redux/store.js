import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  productsReducer,
  cartReducer,
  modalReducer
} from './reducers'

export default createStore(
  combineReducers({
    productsReducer,
    cartReducer,
    modalReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
