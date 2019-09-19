import { combineReducers } from "redux";
import login from './loginReducer';
import rootGroup from './rootReducers';
import getRootGroup from './getRootReducer';
import categories from './categoriesReducer';


const rootReducer = combineReducers({
    login,
    rootGroup,
    getRootGroup,
    categories
    
    
});

export default rootReducer;