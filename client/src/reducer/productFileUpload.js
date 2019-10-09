import {  UPLOAD_PRODUCT_FILE , UPLOAD_PRODUCT_FILE_SUCCESS, UPLOAD_PRODUCT_FILE_FAILURE } from '../action/actionType';

const initialState = {
	payload: null,
	error: null,
	loading: false,
	message:''
};

export default function productUploadFile(state = initialState, action = {}) {
	console.log("reducer", action.payload)
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
				message: action.payload,
				error: null
			};

		case UPLOAD_PRODUCT_FILE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				message:null
			};

		default:
			return state;
	}
}