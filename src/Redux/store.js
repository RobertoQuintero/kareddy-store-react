import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  productsReducer,
  cartReducer
} from './reducers'

export default createStore(
  combineReducers({
    productsReducer,
    cartReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
