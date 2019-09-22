import { GET_CATEGORIES_START , GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from './actionType';


export function getCategoriesActionStart(payload){
      return {
          type: GET_CATEGORIES_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function getCategoriesActionSucess(payload){
      return {
          type: GET_CATEGORIES_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function getCategoriesActionError(error){
      return {
          type: GET_CATEGORIES_FAILURE,
          error: error,
         loading: false
      };
  }