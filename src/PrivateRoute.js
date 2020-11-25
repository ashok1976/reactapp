import React from 'react';
import { Route,Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component, ...rest}) => {
	
	let authenticated = true
	return(
		 <Route {...rest} render={props =>
			  authenticated === true
				? ( <Component {...props} /> )
				: ( <Redirect to={{ pathname: "/login", state: { from: props.location } }}  /> )
				}/>
	)

  }
 
export default PrivateRoute;