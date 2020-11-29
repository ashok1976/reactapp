import React from 'react';


export class Child extends React.Component{
	static getDerivedStateFromProps(props,state){
		return{
			currentValue: props.data * 10,
		}
	}
	constructor(props){
		super(props)
		this.state ={
			currentValue : this.props.data
		}
	}
	
	
	render(){
	  return (
		<div className="App">
		 
		  
		  <div> Current Value: {this.state.currentValue}</div>
		  
		</div>
	  );
	}
}


