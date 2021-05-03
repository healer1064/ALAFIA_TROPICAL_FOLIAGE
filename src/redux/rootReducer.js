import { combineReducers } from 'redux'

// REDUCERS
import { userReducer } from './user/user.reducer'

// ROOT
export default combineReducers({
    user: userReducer
})
