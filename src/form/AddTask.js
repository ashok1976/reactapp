import React from 'react';
import{PostsList} from './PostsList';
import{Counter,Current} from './counter';



const post = [
  {
    id: 1,
    content: "The world will be out of the pandemic soon",
    user: "Lola Lilly",
  },
  {
    id: 2,
    content: "I'm really exited I'm getting married soon",
    user: "Rebecca Smith",
  },
  {
    id: 3,
    content: "What is your take on this pandemic",
    user: "John Doe",
  },
  {
    id: 4,
    content: "Is the world really coming to an end",
    user: "David Mark",
  },
];
export class AllTask extends React.Component{ 
//https://www.youtube.com/watch?v=R_7XRX7nLsw
	constructor(props){
		super(props)
		this.state = {
				list :[],
				name :'',
				sort: '',
				postList: post,
				counter:0,
				current:0
				
			}
			console.log('Supereeeeeeeeeeee', this.props)
		//	this.setState({name:'Ashok'})
			this.state.name="Abc"
		}
		//console.log(this.state.name)
	handleChanges = (event) =>{
		this.setState({[event.target.name] : event.target.value	})
	}
	addNames = () => {
		this.setState(prevState => {
		const list = [...prevState.list, prevState.name];
		return{list, name:''}
		})
	}
	
 handleRemove =(id)=>{
	var list = this.state.list.filter(item => item !== id);
		this.setState({
			list: list
		})
	
 }  
  asending = (e) => {
	  let sort = e.target.value
	 this.state.list.sort((a,b)=>{
		  
		const data = (sort) ? a < b ? 1: -1 :0;
		
		return data
		 
	 })
 }

 Increment = () => {
	this.setState((preState) => ({counter:preState.counter +1}))
	
}
 currIncrement = () => {
	this.setState({current:this.state.current + 1})
	
}
 
 handleClick = () =>{
	 this.props.history.push('/login')
 }
	render(){
		console.log('Supereeeeeeeeeeee')
		return ( 
		  <>	
			<div className="">
			<span onClick={this.handleClick}>Link</span>
			</div>
			
		  

			<section className="container">
				<h3>Names add in class component </h3>
				<div className="row">
					<input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChanges} />
					<button onClick={this.addNames} className="mt-2 mb- 2 btn btn-primary">Add Names</button>
			</div>
			<ul >
				{this.state.list.map((item,index) =>(
					 <li key={index} id={index}>
					 <span>{item}</span>
					 <button type="button" onClick={()=> this.handleRemove(item)}>x</button>   </li>
					  
				))}
				
				</ul>
			<PostsList  posts={this.state.postList}/>
			
			ssssssss
			  <Counter counter={this.state.counter} />
		   <button type="button" onClick={this.Increment}>+</button>
		    <Current current={this.state.current} />
		    <button type="button" onClick={this.currIncrement}>shouldComponentUpdate+</button>
				
			</section>
			  </>
			  );
	}
}



