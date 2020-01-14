import user from "./login/reducers";
import { combineReducers } from 'redux'


const rootReducer = () =>
    combineReducers({
        user,
    });

export default rootReducer;