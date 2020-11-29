import React from 'react';
import{connect} from 'react-redux'
import {FetchThunkData} from './FetchThunkData';
import {FetchUrl} from './../newthunk/FetchUrl'
import Tab from './Tab'
class Thunk extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:'',
			email:'',
			nameError : '',
			emailError:''	}
	}
	componentDidMount(){
		console.log(this.props.url)
		//this.props.FetchThunkData();
		this.props.FetchData();
		this.props.FetchUrl()
		//this.props.myFetchData()
	}
	handleChange = (event) =>{
		event.preventDefault();
		this.setState({[event.target.name]:event.target.value})
	};
	validate = () => {
	let nameError = '';
	 let emailError ="";
		if(!this.state.name){
			nameError = " Please enter your name"
		}
		if(!this.state.email){
			emailError = "Please enter your name"
		}else if(!this.state.name.includes('@')){
					emailError = "invalid email"
	
		}
		if(emailError || nameError){
			this.setState({emailError,nameError});
			return false
		}
		
	}
	onSubmit = (event) => {
		event.preventDefault();
		const isValid = this.validate();
		//alert()
		if(isValid){
			fetch('http://jsonplaceholder.typicode.com/posts')
			//.then(res=> res.json())
			.then(result => console.log(result))
			//console.log(data)
		}
		
			}
	
	
	render(){
		//console.log(this.state.nameError)
		const {userData} = this.props;
		//console.log(this.props)
		return(
		
			<>				
			<h1>Tab</h1>
			<Tab>
				<div label="Tab One"> 
						Nothing to see here, this tab is <em>extinct</em>! 
				</div> 
				

			</Tab>

				<h1> Thunk Middleware</h1>
				{this.state.name}
				<form>
				<input type="text"  name="name" onChange={this.handleChange} value={this.state.name} />
				<div>{this.state.nameError}</div>
				<input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
				<div>{this.state.emailError}</div>
				<button onClick={this.onSubmit}>Submit</button>
				</form>
				
				<div onClick={()=>{this.props.FetchUrl()}} >Load daata</div>
					{this.props.loading ? '<p>Loading...</p> ' :<p><img src={this.props.url}/></p>}
				<h1> Thunk Middleware</h1>
				<ul>
				{
					userData.map(val => <li key={val.id}>
					<h3>{val.title}</h3>
					<p>{val.body}</p>
					</li>)
				}		
					
				</ul>
			</>
		)
	}
}

const mapStateFromProps = state => {
	console.log(state)
	return{
		userData : state.users.data,
		myData : state,
		loading: state.url.loading,
		url: state.url
	};
}

const mapDispatchFromProps = dispatch =>{
	return{
	FetchData: () => dispatch(FetchThunkData()),
	FetchUrl: () =>  dispatch(FetchUrl()),
	
	//FetchUrl : () =>{ dispatch(FetchUrl())}
	//myFetchData:()=> {dispatch(fetchData())}

	//myFetchData :{() => dispatch(fetchData())}
		
		
	}
	
}

	



export default connect(mapStateFromProps,mapDispatchFromProps)(Thunk);
//export default connect(mapStateFromProps,{FetchThunkData})(Thunk);