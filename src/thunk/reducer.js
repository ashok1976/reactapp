
const InitialState = {
	loading:false,
	data : [],
	error:''
}
export const Reducer = (state = InitialState, action) =>{
		switch(action.type){
			case 'LOADER': return{ ...state, loading:true}
			case 'SUCCESSFULL': return { ...state, loading:false,data:action.payload}
			case 'ERROR': return{ ...state, loading:false,error:action.payload}
			default: return state
		}
}
