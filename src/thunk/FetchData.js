import axios from 'axios'
export const loader = () =>{
		return{
			type:"LOADER"
		}
}

export const Successfully = (id) =>{
	console.log(id)
		return{
			type:"SUCCESSFULL", payload:id
		}
}

export const FetchData = () => {
	return (dispatch) => {
		 dispatch(loader())
		 axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {

			 dispatch(Successfully(result.data))
		})
	}
}
