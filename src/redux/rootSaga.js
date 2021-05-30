import { all, call } from "redux-saga/effects";


// SAGAS
import userSagas from './user/user.sagas'
import plantsSagas from './plants/plants.sagas'

export default function* rootSaga(){
    yield all([
        call(userSagas),
        call(plantsSagas),
    ])
}