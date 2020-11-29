import React from 'react';
import {Link} from 'react-router-dom'
import Form from './Form'
import FormListing from './FormListing'
class SiblingLanding extends React.Component{
	constructor(props){
			super()
			this.state = {
					data : [
							{name:'Ashok', email:'ashok.its1@gmail.com'},
							{name:'Ashok', email:'ashok.its1@gmail.com'},
							{name:'Ashok', email:'ashok.its1@gmail.com'},
							{name:'Ashok', email:'ashok.its1@gmail.com'}
							]
					}
		}
	

	eventhandler  = (data )=>{
			let myData = [...this.state.data] ;
			myData.push(data)
			this.setState({
				data:myData
			})
		
		
		}

	render(){
		console.log(this.state.data)
	
			return ( 
				<>	     
			
				<div className="row">
				<div className="col-6"><Form onChange={this.eventhandler} /></div>
				<div className="col-6"><FormListing data={this.state.data} /></div>
				</div>
				
				
				</>
		);
	}
}

export default SiblingLanding;
