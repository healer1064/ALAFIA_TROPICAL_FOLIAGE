import { plantsTypes } from './plants.types'


const INITIAL_STATE = {
    plantsData: [],
    aPlant: {},

}
export const plantsReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case plantsTypes.SET_PLANTS:
            return {
                ...state,
                plantsData: action.payload
            }
        case plantsTypes.SET_A_PLANT:
            return {
                ...state,
                aPlant: action.payload
            }
        default:
            return state
    }
}