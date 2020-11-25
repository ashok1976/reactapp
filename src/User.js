import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function User(props) {
	const [list, setList] = useState([]);
		const [loading, setLoading] = useState(false);
	
	useEffect( ()=>{
		
		 const fetchData = async() =>{
			 setLoading(true)
			 await fetch("http://jsonplaceholder.typicode.com/posts").then(response=>{ return response.json()})
			 .then(result=>  {
				 setLoading(false)
				 setList(result)

			 }			 )
			 
		 }
		fetchData()	
	},[])

	return ( 
	  <>	     
		<h1> User </h1>
	
	{
		loading ? 'Loading....' : 
		list && list.length > 0 ? 	
		list.slice(0,10).map(val=> <p key={val.id}><Link to={`/UserDetails/${val.id}`}>{val.title}</Link></p> )
		:'Loading....' 
		
	}


	</>
  );
}

export default User;
