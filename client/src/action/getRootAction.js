import { GET_ROOT_GROUPNAME_START , GET_ROOT_GROUPNAME_SUCCESS, GET_ROOT_GROUPNAME_FAILURE } from './actionType';


export function rootGroupnameStart(payload){
      return {
          type: GET_ROOT_GROUPNAME_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function rootGroupnameSucess(payload){
      return {
          type: GET_ROOT_GROUPNAME_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function rootGroupnameError(error){
      return {
          type: GET_ROOT_GROUPNAME_FAILURE,
          error: error,
         loading: false
      };
  }