import { plantsTypes } from './plants.types'


const INITIAL_STATE = {
    plants: []
}
export const plantsReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case plantsTypes.SET_PLANTS:
            return {
                ...state,
                plants: action.payload
            }
        default:
            return state
    }
}