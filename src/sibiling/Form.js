import React,{useState,useEffect} from 'react';
import FormField from './FormField'
const  Form = (props) => {
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		name:'',
		email:''
	})
	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]:e.target.value
			
		})
	}
	const handleSubmit = (event) =>{
			event.preventDefault()
			props.onChange(formData)
			setFormData({
				name:'', email:''
			})
		}
		return ( 
			<>	     
			<form onSubmit={handleSubmit}>
				<FormField label="Name" type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
				<FormField label="Email" type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
				<div className="row mt-3" >
				 <input type="submit" noame="name" value="Submit Form"  className="btn btn-primary" />
				</div>
			</form>
			</>
		);
	//}
}

export default Form;
