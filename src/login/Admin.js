import React from 'react';
import {Link,Redirect} from 'react-router-dom'
		
export class Admin extends React.Component{ 
	constructor(props){
		super(props)
		const token = localStorage.getItem('token');
		let loggedIn = true;		
		 if(token === null){
				loggedIn = false
			}
		this.state = { loggedIn  }	
	
	}	
	
	render(){
	//console.log(props)
	if(this.state.loggedIn === false){
			return <Redirect to="/login"  />
		}

		return( 
			<>
			<h2>Admin</h2>
				<p>this is a admin page. only auth people can be see</p>
			<Link to="/admin">Link</Link>
			</>
		)
	}
}
