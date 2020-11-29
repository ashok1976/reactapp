const initialState = {
	 url:'',
	loading:false,
	error:false
}

export const urlReducer = (state = initialState, action) => {
		switch(action.type){
			case 'REQUESTED_URL': return {...state, loading:true, url:false}
			case 'REQUESTED_SUCCESS':return{	...state, loading:false, url:url}
			case 'REQUESTED_ERROR': return{ ...state,loading:false, error:true, url:false}
			default: return state
		}
}