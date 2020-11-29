import React from 'react';
import HighOrderComponent from './HighOrderComponent'
const FetchData = (props) => {
	const {myData} = props;
	return(
		<>
		<h2>{myData.header}</h2>
		<ul style={props.style} >{
			myData.data.slice(0,10).map(val => 
			<li key={val.id} >
			<h3>{val.title} :: </h3>
			<p>{val.body}</p>
			</li>)
			}
		</ul>
		</>
	  );
}
export default HighOrderComponent(FetchData,{
	url:'http://jsonplaceholder.typicode.com/posts',
	colums:['id', 'title','body', 'name'],
	header:'FetchData from  Post JSON API'
	}
	)
