import {  POST_PRODUCT_START , POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE } from '../action/actionType';

const initialState = {
	payload: null,
	error: null,
	loading: false
};

export default function product(state = initialState, action = {}) {
	switch (action.type) {
		case POST_PRODUCT_START:
			return {
				...state,
				loading: true
			};
		case POST_PRODUCT_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case POST_PRODUCT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}