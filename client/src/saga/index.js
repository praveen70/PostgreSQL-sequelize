import { all , spawn } from "redux-saga/effects";
import {loginData
 } from './sagas';




export default function* rootSaga() {
    yield all([
        spawn(loginData),
       
    
    ])
  }