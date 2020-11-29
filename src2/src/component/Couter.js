import React from 'react';
import HOC from './HOC'
class Couter extends React.Component{
	render(){
		const {data} = this.props;
	  return (
		<>
			<button onMouseOver={this.props.incrementCount} style={this.props.style}> 
			count : {data}
			</button>
		</>
	  );
	}
}
export default HOC(Couter);


