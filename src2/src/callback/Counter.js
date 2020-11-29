import React from 'react';

const  Counter = (props) =>{
 	 console.log(' Rendering Counter Component')
	return(
		<>
		{props.text} {props.count}</>
	  )
	
}
export default React.memo(Counter);





/*constructor(props){
		super(props)
		this.state ={
			data : 0,
			
		}
	}

	handleClick = () =>{
		this.setState({data : this.state.data + 1})
	}
	render(){


		  <div> Data : {//this.state.data}</div>


 <h2> High order Component </h2>

//<button onClick={this.handleClick}> Increasement</button>
		  //<Child data={this.state.data}> </Child>
		   <Couter />
		   <HoverCounter /> 
		   <FetchData />
		   <Data />
*/