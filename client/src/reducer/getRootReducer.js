import { GET_ROOT_GROUPNAME_START , GET_ROOT_GROUPNAME_SUCCESS, GET_ROOT_GROUPNAME_FAILURE } from  '../action/actionType';


const initialState = {
	payload: [],
	error: null,
	loading: false
};

export default function getRootGroup(state = initialState, action = {}) {
	switch (action.type) {
		case GET_ROOT_GROUPNAME_START:
			return {
				...state,
				loading: true
			};
		case GET_ROOT_GROUPNAME_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case GET_ROOT_GROUPNAME_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}

