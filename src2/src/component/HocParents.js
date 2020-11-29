import React from 'react';
import {Child}  from './Child';
import Couter from './Couter';
import HoverCounter from './HoverCounter'

class HocParents extends React.Component{
	constructor(props){
		
		super(props);
		this.state = { 
			count : 0,
			data :5
		
		}
	}
handleClick = () => {
	this.setState({data: this.state.data + 1})
	
}

handleClick = () => {
	this.setState({data: this.state.data + 1})
	
}

	render(){
	  return (
	  <>
		<h1>Hight Order Component - Counter </h1>
	    <Child data={this.state.data} />
		
		<div><button onClick={this.handleClick}> Increasement</button>
</div>

		
		<Couter />
		<HoverCounter   />

		
		</>
	  );
	}
}
export default HocParents;


