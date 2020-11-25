import React from 'react';
import{Link,Redirect} from 'react-router-dom'	
export class Logout extends React.Component{ 
	constructor(props){
		super(props);
		 localStorage.removeItem('token');
			
		}

	render(){
		return( 
			<>
				<h2>You have been logged out?</h2>
				<Link to="/login" >Login agin</Link>
			
			</>
		);
	}
}
