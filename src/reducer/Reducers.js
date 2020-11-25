import {combineReducers} from 'redux';
import basketReducer from './basketReducer'
import postReducer from './postReducer'
import {fetchReducer} from './fetchReducer'

const Reducers = combineReducers({
basketState:basketReducer,
posts: postReducer,
fetchData:fetchReducer,
//counter: counterReducer
	
	
	
})
export default Reducers;