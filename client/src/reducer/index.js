import { combineReducers } from "redux";
import login from './loginReducer';
import rootGroup from './rootReducers';
import getRootGroup from './getRootReducer'


const rootReducer = combineReducers({
    login,
    rootGroup,
    getRootGroup
    
    
});

export default rootReducer;