import React from 'react';
import { Route } from 'react-router-dom'; 
import {Provider} from 'react-redux'
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
import UseCallbacks from './useCallback/UseCallback'
import PrivateRoute from './PrivateRoute'

const Public = () =>{
return(
	<>	
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
		<PrivateRoute path="/admin" component={Admin} isLogged="Ashok"/>
		<Route path="/sign" component={Signin} />
		
	</>
	)
}
export default Public;