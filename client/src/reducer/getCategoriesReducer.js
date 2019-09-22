import { GET_CATEGORIES_START , GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from  '../action/actionType';


const initialState = {
	payload: [],
	error: null,
	loading: false
};

export default function getCategoriesData(state = initialState, action = {}) {
	switch (action.type) {
		case GET_CATEGORIES_START:
			return {
				...state,
				loading: true
			};
		case GET_CATEGORIES_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case GET_CATEGORIES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}

