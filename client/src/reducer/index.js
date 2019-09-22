import { combineReducers } from "redux";
import login from './loginReducer';
import rootGroup from './rootReducers';
import getRootGroup from './getRootReducer';
import categories from './categoriesReducer';
import getCategoriesData from './getCategoriesReducer';

const rootReducer = combineReducers({
    login,
    rootGroup,
    getRootGroup,
    categories,
    getCategoriesData
    
    
});

export default rootReducer;