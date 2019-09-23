import { POST_PRODUCT_START , POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE } from './actionType';


export function productStart(payload){
      return {
          type: POST_PRODUCT_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function productSucess(payload){
      return {
          type: POST_PRODUCT_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function productError(error){
      return {
          type: POST_PRODUCT_FAILURE,
          error: error,
         loading: false
      };
  }