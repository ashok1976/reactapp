import React,{Component, useState} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import {AllTask} from './form/AddTask'
import {AddNames} from './form/AddNames';
import {Product} from './form/Product'
import Products from './product/Products'; 
import Cart from './product/Cart'; 
import ShoppingProduct from './shopping/ShoppingProduct'
import {Createemployee} from './crud/Createemployee';
import {EmployeList} from './crud/EmployeList';
import {EditEmployee} from './crud/Editemployee'
import {Login} from './login/Login'
import {Logout} from './login/Logout'
import {Admin} from './login/Admin'
import Signin from './login/Signin'
import {Landing} from './context/Landing'
import UseCallbacks from './useCallback/UseCallback'
import PrivateRoute from './PrivateRoute'
import Protected  from './Protected'
import User  from './User'
import UserDetails  from './UserDetails'


class AppRouting extends React.Component{
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
	render(){
		return(
			<Switch>
				<PrivateRoute path='/Protected' component={Protected} />
				<Route path='/' exact component={Products} ></Route>
				<Route path='/Products' component={Products} ></Route>
				<Route path='/AllTask' component={AllTask} ></Route>
				<Route path='/AddNames' component={AddNames} ></Route>
				<Route path='/Product' component={Product} ></Route>
				<Route  path='/Cart' component={Cart} ></Route>
				<Route path="/uesCallback" component={UseCallbacks} />	
				<Route path='/ShoppingProduct' component={ShoppingProduct} />
				<Route path='/crud' component={Createemployee} />
				<Route path="/EmployeList" component={EmployeList} />
				<Route path="/edit/:id" component={EditEmployee} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<PrivateRoute path="/admin" authenticated={this.props.authenticated} component={Admin}/>
				<Route path="/signup"  component={Signin} />
				<Route path="/create"  component={Landing} />
				<Route path="/user"  component={User} />
				<Route path="/UserDetails/:id"  component={UserDetails} />
			</Switch>
		)
	}
}
export default AppRouting;
//https://www.youtube.com/watch?v=IYCa1F-OWmk
//https://www.youtube.com/watch?v=IYCa1F-OWmk