import { auth } from './../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { plantsTypes } from './plants.types'

// ACTION CREATORS
import { setPlants, fetchPlantsStart } from './plants.actions'

// HELPERS 
import { handleAddPlant, handleFetchPlants } from './plants.helpers'


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

            yield put(
                fetchPlantsStart()
            )
        } catch (error) {
            // console.error(error.message)
        }
    }

export function* onAddPlantStart(){
    yield takeLatest(plantsTypes.ADD_NEW_PLANT_START, addPlant)
}



    export function* fetchPlants(){
        try {
            const plants = yield handleFetchPlants()
            yield put(
                setPlants(plants)
            )
            
        } catch (error) {
            // console.error(error.message)
        }
    }

export function* onFetchPlantsStart(){
    yield takeLatest(plantsTypes.FETCH_PLANTS_START, fetchPlants)
}





export default function* plantsSagas(){
    yield all([
        call(onAddPlantStart),
        call(onFetchPlantsStart)
    ])
}