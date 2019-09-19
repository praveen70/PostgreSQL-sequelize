import { POST_CATEGORIES_START , POST_CATEGORIES_SUCCESS, POST_CATEGORIES_FAILURE } from '../action/actionType';

const initialState = {
	payload: null,
	error: null,
	loading: false
};

export default function categories(state = initialState, action = {}) {
	switch (action.type) {
		case POST_CATEGORIES_START:
			return {
				...state,
				loading: true
			};
		case POST_CATEGORIES_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case POST_CATEGORIES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}

