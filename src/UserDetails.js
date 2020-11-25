import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function UserDetails(props) {
	const [list, setList] = useState([]);

	
	useEffect( ()=>{
			let id = props.match.params
			console.log(id)
		 const fetchData = async(id) =>{
			 await fetch(`http://jsonplaceholder.typicode.com/posts/${props.match.params.id}`).then(response=>{ return response.json()})
			 .then(result=>  {
			 setList(result)

			 })
			 
		 }
		fetchData()	
	},[])
	
	
	let url = props.location.pathname;
	let splits = url.split('/')
	console.log()
 const nextDetail = ()=> {
	 let current =0;
	 let id = props.match.params.id ;
	 
	 //setList(id + 1)
 }

	
console.log(list)
	return ( 
	  <>	     
		<h1> UserDetails </h1>
		<p>{list.id}</p>
		<p>{list.title}</p><p>{list.body}</p>
		<button onClick={nextDetail}>Next</button>

	</>
  );
}

export default UserDetails;
