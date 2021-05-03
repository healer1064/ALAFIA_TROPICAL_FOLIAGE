import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// ROOT REDUCER
import rootReducer from './rootReducer'

//REDUX MIDDLEWARES
export const middlewares = [logger]


//THE STORE
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store