import { all, call } from "redux-saga/effects";


// SAGAS
import userSagas from './user/user.sagas'

export default function* rootSaga(){
    yield all([call(userSagas)])
}