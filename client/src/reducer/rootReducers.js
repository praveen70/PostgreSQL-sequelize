import { POST_ROOT_GROUPNAME_START , POST_ROOT_GROUPNAME_SUCCESS, POST_ROOT_GROUPNAME_FAILURE } from  '../action/actionType';


const initialState = {
	payload: null,
	error: null,
	loading: false
};

export default function rootGroup(state = initialState, action = {}) {
	//console.log("reducer" ,action.payload);
	switch (action.type) {
		case POST_ROOT_GROUPNAME_START:
			return {
				...state,
				loading: true
			};
		case POST_ROOT_GROUPNAME_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case POST_ROOT_GROUPNAME_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}

