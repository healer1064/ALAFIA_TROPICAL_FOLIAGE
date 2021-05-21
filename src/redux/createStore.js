import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddle from 'redux-saga'


// ROOT REDUCER
import rootReducer from './rootReducer'

// ROOT SAGA
import rootSaga from './rootSaga'

//REDUX MIDDLEWARES
// ...(instance of Saga to add to middlewares array)
       const sagaMiddleware = createSagaMiddle()
export const middlewares = [thunk, sagaMiddleware, logger]


//THE STORE
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)


export default store