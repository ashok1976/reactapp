import React from 'react';
const styles = {
 background:'#ff5400',
color:'#fff',
border:'0',
minHeight:'30px',
borderRadius:'4px',
marginRight: '4px'

} 

const HOC = OriginalComponent => {
	
	class newComponent extends React.Component{
		constructor(props){
		super(props)
		this.state = {
			count : 0
		}
	}
	incrementCount = () => {
		this.setState({count: this.state.count + 1})
	}
		render(){
			return <OriginalComponent data={this.state.count} incrementCount={this.incrementCount} style={styles} />
		}
	}
	return newComponent
	
}

export default HOC;


