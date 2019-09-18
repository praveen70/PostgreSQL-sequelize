import { all , spawn } from "redux-saga/effects";
import { loginData, rootGroupData , getRootGroupData} from './sagas';




export default function* rootSaga() {
    yield all([
        spawn(loginData),
        spawn(rootGroupData),
        spawn(getRootGroupData),
       
    
    ])
  }