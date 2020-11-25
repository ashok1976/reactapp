import {ADD_POST} from './../action/types'

const initialState  ={
		posts : []
}
const postReducer = (state  = initialState , action) => {
	switch(action.type){
		case ADD_POST: return{...state, posts:action.payload}
		default : return state;
	}
}
export default postReducer;


