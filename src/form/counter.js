import React from 'react';
export const Counter  = (props) => {
		console.log('Counter is rendering!')
		return ( 
			<>
			  {props.counter}			
			</>
		  );
}

export class Current extends React.Component{
	/*
	constructor(){
		super()
		this.state = {
			arr : []
		}
		this.setState({list:this.state.list +1}) // warning: can not call setState on a component that is not yet mounted.
	}
	*/
	shouldComponentUpdate(nextProp,nextState){
		console.log(this.props.current,nextProp.current)
			if(this.props.current === nextProp.current){
			return false
		}else{
			return true
		}
	}
render(){
		console.log('Current is rendering!');
		return ( 
			<> 
			  {this.props.current}
			
			</>
		  );
	}
}

