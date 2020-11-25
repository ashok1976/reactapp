import {ADD_POST} from './types';
const getPostData = (data) => {
	return {
		type: ADD_POST,
		payload:data
		
	}
}
export const fetchPostData = () => {
	return async(dispatch) => {
		await fetch('https://jsonplaceholder.typicode.com/posts')
		.then(respone => respone.json())
		.then(result => {
				dispatch(getPostData(result))
				//console.log(result)
		})
		
	}
}


//https://chriscourses.com/blog/redux