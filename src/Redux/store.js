import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  productsReducer,
} from './reducers'

export default createStore(
  combineReducers({
    productsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
