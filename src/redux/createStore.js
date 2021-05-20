import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// ROOT REDUCER
import rootReducer from './rootReducer'

//REDUX MIDDLEWARES
export const middlewares = [thunk, logger]


//THE STORE
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store