import {useState} from 'react';

export const useForms = (callback) => {
const [values, setValues] = useState({department:''});

const handleSubmit = (event) =>{
	 console.log(event.target.name)
	if(event){ 
		event.preventDefault();
	  }

	 callback()
};

 const handleChange = (event) => {
	event.persist();
	 console.log(event.target.name)
	 setValues(values => ({...values, [event.target.name]: event.target.value}))
 } 
	 return { handleChange, handleSubmit,values }
	 
 }