import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'

import { basketReducer } from './reducers/basket'
import { userReducer } from './reducers/userInfo'

const reducers = combineReducers({
  basketReducer,
  userReducer
})

const initialState = {}

const composeEnhancer = composeWithDevTools({})

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
