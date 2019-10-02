import { GET_PRODUCT_START , GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from './actionType';


export function getProductActionStart(payload){
      return {
          type: GET_PRODUCT_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function getProductActionSucess(payload){
      return {
          type: GET_PRODUCT_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function getProductActionError(error){
      return {
          type: GET_PRODUCT_FAILURE,
          error: error,
         loading: false
      };
  }