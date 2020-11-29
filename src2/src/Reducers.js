import {combineReducers} from 'redux';
import {useReducer} from './reducers/useReducer';
import {urlReducer} from './newthunk/urlReducer'
export const Reducers  = combineReducers({
 users: useReducer,
 url : urlReducer,
 //user: useReducers
}
)


/*


export default function fetchData(){
	return function(dispatch){
		dispatch(loading())
	}
} 




*/