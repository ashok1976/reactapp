import {combineReducers} from 'redux';
import basketReducer from './basketReducer'
import postReducer from './postReducer'
import {fetchReducer} from './fetchReducer'
import {thunkReducer} from './thunkReducer'
import {newsReducer} from './newsReducer'
import {reducer as formReducer} from 'redux-form'

const Reducers = combineReducers({
basketState:basketReducer,
posts: postReducer,
fetchData:fetchReducer,
user: thunkReducer,
form:formReducer,
saga : newsReducer
	
	
	
})
export default Reducers;