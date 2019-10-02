import { combineReducers } from 'redux';
import login from './loginReducer';
import rootGroup from './rootReducers';
import getRootGroup from './getRootReducer';
import categories from './categoriesReducer';
import getCategoriesData from './getCategoriesReducer';
import product from './productReducer';
import getProductData from './getProductReduce';
import productUploadFile from './productFileUpload';

const rootReducer = combineReducers({
	login,
	rootGroup,
	getRootGroup,
	categories,
	getCategoriesData,
	product,
	getProductData,
	productUploadFile
});

export default rootReducer;
