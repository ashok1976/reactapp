import React,{useContext,useState} from 'react';
import {myContext} from './myContext'
import {FormField} from './FormField';


import ReactDOM from 'react-dom'
const createMarkup = ()=>{
	return (
		<>
		search Element
		</>
	)
}

export const ContactForm  = (props) => {
	const [state,dispatch] = useContext(myContext);
	const [value, setValue] = useState({name:'',email:''});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState( null)
	const onChange = (event) => {
		setValue({
				...value,[event.target.name]:event.target.value})
				}
	const addData =(id) =>{
		return {type:'ADD_CONTACT', id	}
	}
	console.log(state.contacts)
	
	const onSubmitted = (e) =>{
		e.preventDefault();
		//setLoading(true);
		let current =  100 + state.contacts.length + 1;
		const formData = {id: current, name:value.name,email:value.email};
		dispatch({type:'ADD_CONTACT', payload:formData})
		setValue('');
		//setLoading(false)
		
	
	}
	
	const createMarkup = () => {
		document.getElementId('replace').
	}
	return ( 
	  <>
	  
	  
	  
		<div id="replace">search Element</div>
		
		<button onClick={createMarkup}>innerHTMLML</button>

		
		<form onSubmit={onSubmitted}>
			<FormField label="Name" type="text"  placeholder="Enter Name" name ="name"   onChange={onChange}  value={value.name} />
			<FormField label="Email" type="email" placeholder="Enter email" name="email" onChange={onChange}  value={value.email} />
			<button type="submit" className="btn btn-primary" disabled={loading}>Add Name</button>
		</form>
	 </>
  );
}

///https://www.youtube.com/watch?v=DdWW_U6caMY