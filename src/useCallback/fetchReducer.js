const InitialState ={
		loading:false,
		data:[]
	
}

export const FetchReducer = (state = InitialState, action) => {
	switch(action.type){
		case 'LOADER': return {...state, loading:true}
		case 'SUCCESS': return {...state, loading:false, data:action.payload}
		default: return state
	}
}