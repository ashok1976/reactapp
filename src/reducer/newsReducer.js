const initialState = {
	loading:false,
	data:[],
	error:''
}
 export const newsReducer = (state=initialState,action) => {
	 switch(action.type){
		 case 'GET_NEWS': return {...state, loading:true}
		 case 'NEWS_RECEIVED': return {...state, loading:false, data:action.payload}
		// case 'ERROR': return {...state, loading:false, error:action.payload}
		 default: return state
	 }
 }