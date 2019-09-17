import {   LOGIN_START , LOGIN_START_SUCCESS, LOGIN_START_FAILURE } from '../action/actionType';

const initialState = {
	payload: null,
	error: null,
	loading: null
};

export default function login(state = initialState, action = {}) {
	// console.log("reducer" ,action);
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				loading: true
			};
		case LOGIN_START_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case LOGIN_START_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}
