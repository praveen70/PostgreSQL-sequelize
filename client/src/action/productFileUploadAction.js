import { UPLOAD_PRODUCT_FILE , UPLOAD_PRODUCT_FILE_SUCCESS, UPLOAD_PRODUCT_FILE_FAILURE } from './actionType';

export function uploadFileStart(payload){
    return {
        type: UPLOAD_PRODUCT_FILE,
        loading: true,
        payload:payload,
    };
}

export function uploadFileSucess(payload){
    return {
        type: UPLOAD_PRODUCT_FILE_SUCCESS,
        payload : payload,
        loading: false
    };
}


export function uploadFileError(error){
    return {
        type: UPLOAD_PRODUCT_FILE_FAILURE,
        error: error,
       loading: false
    };
}