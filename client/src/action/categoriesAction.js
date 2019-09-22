import { POST_CATEGORIES_START , POST_CATEGORIES_SUCCESS, POST_CATEGORIES_FAILURE } from './actionType';


export function categoriesStart(payload){
      return {
          type: POST_CATEGORIES_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function categoriesSucess(payload){
      return {
          type: POST_CATEGORIES_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function categoriesError(error){
      return {
          type: POST_CATEGORIES_FAILURE,
          error: error,
         loading: false
      };
  }