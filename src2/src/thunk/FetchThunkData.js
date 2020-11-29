//import React,{Compoent} from 'react';

const loaded = () =>{
	return{type:'LOADING'}
}
const successfully = data => {
	return{type:'SUCCESS', payload:data}
}
export function FetchThunkData(){
	return dispatch  => {
		dispatch(loaded());
		fetch('http://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(result => dispatch(successfully(result)))
		}
	}
/*


const successfully1 = mydata => {
	return{type:'SUCCESS', payload:mydata}
}
export const fetchData = () => dispatch =>{
	dispatch(loaded());
	fetch('http://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(result=> 
	{console.log(result);
dispatch(successfully1(result))})
}
*/
//export default FetchThunkData;