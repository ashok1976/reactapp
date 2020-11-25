import React,{useReducer,useEffect} from 'react';
export const LOADER = "LOADER";
export const SUCCESS = "SUCCESS";


export const initialState = {
	loading: false,
	data: []
	
}

export const loading = () => {
	return{type:'LOADER'}
}
export const dataLoad = (data) => {
	return{
		type:'SUCCESS', payload: data
	}
}
export const fetchUser = (state, action) => {
	switch(action.type){
		case LOADER: return {...state, loading:true}
		case SUCCESS: return {...state, loading:false, data:action.payload}
		default: return state
	}
}

export const useFetchData = () => {
	const [user, dispatch]= useReducer(fetchUser,initialState)
		useEffect(()=>{
			const fetchData = async() => {
			dispatch(loading())
			const result = await fetch('http://jsonplaceholder.typicode.com/users')
			.then(res=>{
					return res.json()
			}).then(result=>{
				dispatch(dataLoad(result));
				//console.log(result)
				
			})
		}
		fetchData()
	},[])
	return user
	
	 
	

}
	