import { LOGIN_START , LOGIN_START_SUCCESS, LOGIN_START_FAILURE } from './actionType';


export function loginDataStart(payload){
  //console.log("action page",JSON.stringify(payload))
    return {
        type: LOGIN_START,
        loading: true,
        payload:payload,
    };
}

export function loginDataSucess(payload){
    return {
        type: LOGIN_START_SUCCESS,
        payload : payload,
        loading: false
    };
}


export function error(error){
    return {
        type: LOGIN_START_FAILURE,
        error: error,
       loading: false
    };
}
