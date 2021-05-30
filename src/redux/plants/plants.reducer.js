import { plantsTypes } from './plants.types'


const INITIAL_STATE = {
    plantsData: []
}
export const plantsReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case plantsTypes.SET_PLANTS:
            return {
                ...state,
                plantsData: action.payload
            }
        default:
            return state
    }
}