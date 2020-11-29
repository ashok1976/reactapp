import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {getData} from './action'
import ListItem from './ListItem'



const SagaLanding  = (props) => {

const {loading,user} = props;
console.log(user.length)


			return (
				<>
					<h1>Saga</h1>
					{ loading 
					? 'Loading ...'
					: <ListItem />
					}
					
					{
						user.length <= 9 
						? <button onClick={()=> props.fetchData()}> Fetch Data </button>
						:''
						
					}
					
				</>
	)
}

const mapStateToProps = state => {
	return{
	loading:state.saga.loading,
	user:state.saga.data
}}

const mapDispatchToProps = dispatch => {
	
	return{
		fetchData : () => { dispatch(getData())}
		}
	}


export default connect(mapStateToProps,mapDispatchToProps)(SagaLanding)