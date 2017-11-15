// To combine all reducers and make them play nice together
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    // Key can be anything, value is a reducer
    libraries: LibraryReducer
});