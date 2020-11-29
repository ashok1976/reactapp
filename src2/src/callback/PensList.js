import React,{useState,useCallback,useEffect} from 'react';
import Pen  from './Pen'
  
class PensList extends  React.Component{
	constructor(props){
		super(props)
		this.state = {
			list : [
			{title: "Elastic Input[Google Chrome]",url: "https://codepen.io/andreasstorm/pen/JBGWBa", author: "Andreas Storm",
			 runing:true
			},
			{title: "Phenomenon instances!",url: "https://codepen.io/cvaneenige/pen/ajNjaN",author: "Colin van Eenige",runing:10},
			{title: "cpc-forms experiment with css variables",url: "https://codepen.io/terabaud/pen/YjwYKv",author: "Lea Rosema",runing:true}
			]
			
		}
	}
	render(){
		const {list} = this.state;
	return(
		<>
		<ul>
		{
			list.map((val,i)=>{
			return <Pen key={i+1} id={i} {...val} />
			})
		}
		</ul>
			
		</>
	  )
	}
}
export default PensList;
