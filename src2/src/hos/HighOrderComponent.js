import React from 'react';
const styles = {
	textAlign:'left',
	margin:'0px'
}
const HighOrderCompoent = (OriginalComponent,inputData) =>{
	return class newUpdatedCompoent extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				data : [],
				column : inputData.colums,
				header: inputData.header
			}
		}
		componentDidMount(){
			fetch(inputData.url)
			.then(response => response.json())
			.then(result => this.setState({data:result}))
		}
	render(){
			return( <OriginalComponent myData={this.state} style={styles} /> )
		}
	}
	//return newUpdatedCompoent
}


export default HighOrderCompoent;
//https://www.youtube.com/watch?v=hoIhgmSP2rA
