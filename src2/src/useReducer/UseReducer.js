import React,{useReducer,useEffect} from 'react';
//import {userReducer} from './reducers/userReducer'
const initialState = {
	loading:true,
	data:[]
	
}
const userReducer = (state=initialState, action) =>{
	switch(action.type){
		case 'LOADING':
		return{...state,loading:true}
		case 'SUCCESS' :
		return {...state, loading:false, data:action.payload}
		default : return 'Unexpected action';
	}
}
const loadData = () =>{
	return{type:'LOADING'}
}
const successData = (id) => {
	return{type:'SUCCESS', payload:id}
}
const UseReducer = (props) => {
	const [data, dispatch] = useReducer(userReducer,initialState);
	useEffect(()=> {
	const fetchData = () => {
			dispatch(loadData())
			fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json())
			.then(result =>  {
					dispatch(successData(result))
					}
				)
		}
	fetchData();
	},[]);
	return(
		<>
			<h1> useReducer Hookes</h1>
			<ul>
				{ data.loading ? 'Loading!! Please wait' : 
					data.data.slice(0,20).map( item => { 
						return <li key={item.id}><h3>{item.title}</h3><p>{item.body}</p></li>
						}
					)
				}
			</ul>
		</>
	)
}
export default UseReducer;