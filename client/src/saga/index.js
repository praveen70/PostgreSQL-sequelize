import { all , spawn } from "redux-saga/effects";
import { loginData, rootGroupData , 
    getRootGroupData, postCatrgoriesDataSagasStart,
    getCatrgoriesDataSagasStart,postProductSagasStart
} from './sagas';




export default function* rootSaga() {
    yield all([
        spawn(loginData),
        spawn(rootGroupData),
        spawn(getRootGroupData),
        spawn(postCatrgoriesDataSagasStart),
        spawn(getCatrgoriesDataSagasStart),
        spawn(postProductSagasStart),
       
    
    ])
  }