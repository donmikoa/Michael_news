import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

//Implementing the Search Reducer
export default combineReducers({
	news: searchReducer,
});
