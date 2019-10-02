import { GET_PRODUCT_START , GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from  '../action/actionType';


const initialState = {
	payload: [],
	error: null,
	loading: false
};

export default function getProductData(state = initialState, action = {}) {
	switch (action.type) {
		case GET_PRODUCT_START:
			return {
				...state,
				loading: true
			};
		case GET_PRODUCT_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case GET_PRODUCT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}

