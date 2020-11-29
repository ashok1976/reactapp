import React,{useEffect} from 'react';
import thunk from 'redux-thunk';
import {connect } from "react-redux";
import {FetchData} from './FetchData'
import {Link} from 'react-router-dom'

const Thunks = (props) => {
	//props.FetchData();
	useEffect(()=>{
		props.FetchData();
	},[])
	
	const {loading,user} = props;
		console.log()
	return(
			<>
			<div>Thunk </div>
			<Link to="/sagalanding" >Saga</Link>
			{
				 loading 
				 ? 'Loading ... ' 
				 : user.slice(0,20).map(val=>(
					 
					 <div key={val.id}>
					 <p>{val.id}</p>
					 <p> {val.id}</p></div>
				  )
				 )
				
				 
			}
		</>
	)
}
const mapStateToProps = (state) => {
	console.log()
	return{ user:state.user.data, loading:state.user.loading}
}
	


export default connect(mapStateToProps,{FetchData})(Thunks);
