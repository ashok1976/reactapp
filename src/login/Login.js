import React from 'react';
import{Redirect} from 'react-router-dom'
import axios from 'axios';

		
export class Login extends React.Component{ 
	constructor(props){
		super(props)
			this.state = {
				email:'',
				password:'',
				token:''
			
			}
		}
handleChange = (e) =>{
		this.setState({
		[e.target.name]:e.target.value
	})
}
submitForm = (event) =>{
	event.preventDefault();
	const formData = {email:this.state.email, password:this.state.password}
	const apiURL = "http://localhost:3001/login"; 
		fetch(apiURL, {method: 'POST', headers:{'Content-Type': 'application/json'},
		body: JSON.stringify(formData)})
		.then(res=>  res.json()).then(result=> {
				localStorage.setItem('token', JSON.stringify({loggedIn:true,token: result.token}))
				//localStorage.setItem('token',result.token)
				this.setState({
					loggedIn:true
				})
				//history.push('/admin')

			})
	}
	
	render(){
		console.log(this.state.loggedIn)
	
		if(this.state.loggedIn == true){
			return  <Redirect to="/admin" />
		}
		return( 
			<>
			<h2>Login</h2>
			<form onSubmit={this.submitForm}>
				<div className="row mt-3">
				<label> Email</label>
					<input type="email" placeholder="enter your Email" 
					value={this.state.email} name="email"  className="form-control"
					onChange={this.handleChange} />
					</div>
				<div className="row mt-3">
				<label> Password</label>
					<input type="password" 	value={this.state.password} name="password"  className="form-control"
					onChange={this.handleChange} />
					</div>
				<div className="row mt-3">
				<button type="submit" className="btn btn-primary"> Submit</button>
					
					</div>
					
				</form>
			</>
		);
	}
}

//https://www.youtube.com/watch?v=ys6h3x0NfQs
