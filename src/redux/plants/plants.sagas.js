import { auth } from './../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { plantsTypes } from './plants.types'

import { handleAddPlant } from './plants.helpers'


    export function* addPlant({ payload: { 
        plantName, 
        plantThumbnail, 
        plantPrice
     } }){

        try {
            const timestamp = new Date()
            yield handleAddPlant({
                plantName, 
                plantThumbnail, 
                plantPrice, 
                AdminUserUID: auth.currentUser.uid,
                AdminUserName: auth.currentUser.displayName,
                createdDate: timestamp
            })
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