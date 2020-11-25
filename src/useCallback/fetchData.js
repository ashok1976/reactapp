import React from 'react';
	const dataLoad = (data) => {
	return{
		type:'SUCCESS', payload: data
	}
}


 export const  FetchData = () => {
	 return async(dispatch) =>{
			dispatch({type:'LOADER'});
			await fetch('http://jsonplaceholder.typicode.com/posts').then(data => data.json())
			.then( response => {
				//console.log(response)
				dispatch(dataLoad(response))
			})
		 
	 }
}

export const CallCounter = (props) =>{
	console.log('callBack function')
	return(
		<>
		{props.count}
		
		</>
	)
}