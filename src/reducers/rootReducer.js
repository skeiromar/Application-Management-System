import {combineReducers} from 'redux';
import entitiesReducer from './entitiesReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    entities: entitiesReducer,
    login: loginReducer,
});