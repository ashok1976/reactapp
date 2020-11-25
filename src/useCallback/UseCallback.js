import React,{useEffect,useReducer} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FetchData} from './fetchData'
import {counterReducer,countState} from './counterReducer';
import {ParentComponent} from './ParentComponent'
 const  UseCallbacks  = (props) => {
	 //  const [count, setCount] = useState(0);
	   const [counter, dispatch] = useReducer(counterReducer,countState)
	
	  
const counterDecrement = () => {
			dispatch({type:'DEINCREMENT'})
	}
	const counterIncrement = () => {
			dispatch({type:'INCREMENT'})
	}
	useEffect(()=>{
		props.FetchData();
			
	},[])
	

 const {fetchData} = props
	return(
	
	
		<>	
			<ParentComponent />
		
			
			<p>uesCallback {counter}</p>
			<span onClick={counterIncrement}>Plus + </span> ::
			<span onClick={counterDecrement}> Minus- </span>
			{
				fetchData.map(val=> 
				<p key={val.id}>
				<Link to={`product/${val.id}`}>{val.title}</Link>
				
				
				</p>)}
			
		</>
	)
}
const mapStateToProps = state =>{
	return {
		fetchData : state.fetchData.data
	}
}


export default connect(mapStateToProps, {FetchData})(UseCallbacks)
	