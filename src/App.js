import React from 'react';

import './App.css';
import store from './Store'
import {Provider} from 'react-redux'
import Navigation from './Navigation'
import Public from './Public';
import AppRouting from './AppRouting';
import PrivateRoute from './PrivateRoute'
import {Admin} from './login/Admin'
class App extends React.Component{
	constructor(props){
		super(props);
		const token =  localStorage.getItem('token');
		let authenticated:true
		if(authenticated === null){
				authenticated = true
			}
		this.state ={
			authenticated:false,
			loading:true
		}
	}
	
	componentDidMount(){
		console.log('App')
	}
	
	render(){
		
	
	  return (
		  <Provider store={store}>
				<div className="container">
					<Navigation />
					<AppRouting authenticated = {this.state.authenticated} />
					<PrivateRoute path="/admin" authenticated={this.props.authenticated} component={Admin}/>
				</div>
		 </Provider>
	  );
	}
}
export default App;

//https://www.youtube.com/watch?v=3Hi6ljgH3ng
//https://www.youtube.com/watch?v=DdWW_U6caMY
