import { POST_ROOT_GROUPNAME_START , POST_ROOT_GROUPNAME_SUCCESS, POST_ROOT_GROUPNAME_FAILURE } from './actionType';


export function rootGroupnameStart(payload){
    // console.log("action page",payload);
      return {
          type: POST_ROOT_GROUPNAME_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function rootGroupnameSucess(payload){
      return {
          type: POST_ROOT_GROUPNAME_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function rootGroupnameError(error){
      return {
          type: POST_ROOT_GROUPNAME_FAILURE,
          error: error,
         loading: false
      };
  }