import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getNumbers} from './action/getNumbers';
import {Link} from 'react-router-dom';


 const Navigation = (props) => {
	 const [isAutheticated, setisAutheticated] = useState(false);
	 const login = () =>{
		setisAutheticated(true)
	 }
		const logout = () => {
			setisAutheticated(false);
		}
	 
	 /*
	 let token = localStorage.getItem('token');
	 let isLogged = true;
	 if(token == null){
		 isLogged = false;
	 }
	 */
	 //console.log(props)
	 useEffect(()=>{
		getNumbers()
	 },[])
	
	 
	return ( 
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	    <div className="navbar-collapse" id="navbarNav">
		  <ul className="navbar-nav">	
			<li className="nav-item"><Link className="nav-link" to="/Products">Products</Link></li>
			<li className="nav-item"><Link className="nav-link" to="/AddNames">AddNames</Link></li>
			<li className="nav-item"><Link  className="nav-link" to="/AllTask">AllTask </Link></li>
			<li className="nav-item"><Link className="nav-link" to="/Product">Product </Link></li>
			<li className="nav-item"><Link className="nav-link" to="/ShoppingProduct">Shopping </Link></li>
			<li className="nav-item"><Link className="nav-link" to="/crud">Crud </Link></li>
			<li className="nav-item"><Link className="nav-link" to="/uesCallback">uesCallback </Link></li>
			<li className="nav-item"><Link className="nav-link" to="/signup">SignUp</Link></li>
			<li className="nav-item"><Link to='/login' className="nav-link">Login</Link><br/></li>
			<li className="nav-item"><Link to='/create' className="nav-link">create Context</Link><br/></li>
			<li className="nav-item"><Link to='/user/:id' className="nav-link">User</Link><br/></li>
			<li className="nav-item"><Link to='/sibling' className="nav-link">Sibling </Link><br/></li>
			<li className="nav-item"><Link to='/thunks' className="nav-link">Thunks </Link><br/></li>
			<li className="nav-item"><Link to='/reduxforms' className="nav-link">Redux Form </Link><br/></li>
			<li className="nav-item"><Link to='/news' className="nav-link">Accordion Form </Link><br/></li>
		 </ul>
		 </div>
		 </nav>
	 );

}

const mapStateToProps = state =>{
	return{
		basketProps : state.basketState
	}
	
}


export default connect(mapStateToProps,{getNumbers})(Navigation) 
