//import React,{Compoent} from 'react';

const loaded = () =>{
	return{type:'REQUESTED_URL'}
}
const requestDogSuccess = url => {
		return{type:'REQUESTED_SUCCESS', payload:url}
}
const requestError = () => {
	return{type:'REQUESTED_ERROR'}
}
export const FetchUrl = () => {
	
	return async(dispatch) => {
		
		dispatch(loaded())
		await fetch('https://dog.ceo/api/breeds/image/random')
		.then(response=> response.json())
		.then(result =>	dispatch(requestDogSuccess(result)))
		.catch(err => dispatch(requestError()) )
		}
	}
	
	//export class FetchUrl
