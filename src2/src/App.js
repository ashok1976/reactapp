import React from 'react';
import './App.css';
import HOC from './hos/HOC'; 

import ParentComponent from './callback/ParentComponent';
import HocParents from './component/HocParents';
import UseReducer from './useReducer/UseReducer';
import Thunk from './thunk/Thunk'
import {BrowserRouter, Route ,Link} from 'react-router-dom'

const App  = () =>{
	  return (
		<BrowserRouter>
			<nav className="navbar navbar-light">
			<ul className="nav navbar-nav">
			<li> <Link to="/">Home</Link></li>
			<li><Link to="/hoc-api">High Order Component</Link></li>
			<li><Link to="/callback">useCallback </Link></li>
			<li><Link to="/hoc-counter">HOC Counter</Link></li>
			<li><Link to="/use-reducer">UseReducer</Link></li>
			<li><Link to="/thunk">Thunk </Link></li>
			</ul>
			</nav>
		  <Route exact path="/" component={ParentComponent} />
		  <Route path="/callback" component={ParentComponent} />
		  <Route path="/hoc-api" component={HOC} />
		  <Route path="/hoc-counter" component={HocParents} />
		  <Route path="/use-reducer" component={UseReducer} />
		  <Route path="/thunk" component={Thunk} />
    	</BrowserRouter>
	  )
	
}

export default App;
