import { takeLatest, put, all, call } from 'redux-saga/effects'
import { plantsTypes } from './plants.types'


    export function* addPlant({ payload: { 
        productName, 
        productThumbnail, 
        productPrice
     } }){

        try {
            
        } catch (error) {
            // console.error(error.message)
        }
    }

export function* onAddPlantStart(){
    yield takeLatest(plantsTypes.ADD_NEW_PLANT_START, addPlant)
}





export default function* plantsSagas(){
    yield all([
        call(onAddPlantStart)
    ])
}