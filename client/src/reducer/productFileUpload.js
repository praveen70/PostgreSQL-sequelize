import {  UPLOAD_PRODUCT_FILE , UPLOAD_PRODUCT_FILE_SUCCESS, UPLOAD_PRODUCT_FILE_FAILURE } from '../action/actionType';

const initialState = {
	payload: null,
	error: null,
	loading: false
};

export default function productUploadFile(state = initialState, action = {}) {
    console.log("reducer file", action.payload)
	switch (action.type) {
		case UPLOAD_PRODUCT_FILE:
			return {
				...state,
				loading: true
			};
		case UPLOAD_PRODUCT_FILE_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case UPLOAD_PRODUCT_FILE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}