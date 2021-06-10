import { combineReducers } from 'redux'

// REDUCERS
import { userReducer } from './user/user.reducer'
import { plantsReducer } from './plants/plants.reducer'
import { cartReducer } from './cart/cart.reducer'

// ROOT
export default combineReducers({
    user: userReducer,
    plants: plantsReducer,
    cart: cartReducer,
})
