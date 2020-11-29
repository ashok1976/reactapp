import React from 'react';
import HOC from './HOC'
class HoverCounter extends React.Component{
	render(){
	  return (
		<>
		<button onClick={this.props.incrementCount} style={this.props.style} > 
		  count : {this.props.data}</button>
		</>
	  );
	}
}
export default HOC(HoverCounter)
