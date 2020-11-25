import React,{useState} from 'react';
import axios from 'axios'; 
import { useForm } from "react-hook-form";
import {Input} from './Input'
const Signin = (props) => { 
	const {register,handleSubmit,errors,control } = useForm();
	const apiURL = "http://localhost:3001/createLogin"; 
	const onSubmit   = (data) =>{
		const formData ={
			name:data.name,
			surname:data.surname,
			email:data.email,
			mobile:data.mobile,
			password:data.password,
			gender:data.gender,
		}
		axios.post(apiURL,formData).then(response => console.log(response))
		console.log(formData)
		
		}
		return( 
			<>
			<h2>Sign In</h2>
				<form onSubmit ={handleSubmit(onSubmit)}>
				<Input type="text" className={`form-control ${errors.name ? 'is-invalid' : ' '}`} label="Name" name="name" placeholder="Enter your name" register={register({
					 required: "Name is required", minLength:{value:5, message:"too shot"}, maxLength:{value:30, message:"to long"}})} />
				{errors.name && <p className="is-invalid" >{errors.name.message}</p>}
				<Input type="text" label="Surname" name="surname" placeholder="Enter your Surname" 
				 register={register({required: "Surname is required"})
				 }   className={`form-control ${errors.surname ? 'is-invalid' : ' '}`}/>
				{errors.surname && <p className="is-invalid" >{errors.surname.message}</p>}
				<Input type="email" label="Email" name="email" placeholder="Enter your e-mail"  register={register({ required: "Required", pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })}
				 className={`form-control ${errors.email ? 'is-invalid' : ' '}`}
				/>
					{errors.email && <p className="is-invalid" >{errors.email.message}</p>}
				<Input type="text" label="Mobile" name="mobile" placeholder="Enter your mobile" register={
					register({required: "Mobile is required"})}  className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} />
				{errors.mobile && <p className="is-invalid" >{errors.mobile.message}</p>}
				<Input type="password" label="Password" name="password" placeholder="Enter your password" 
				 register={
					register({required: "Password is required",	minLength:{value:8, message:"too shot"}, maxLength:{value:14, message:"to long"}}) }  className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
				{errors.password && <p className="is-invalid" >{errors.password.message}</p>}
					<select name="gender" ref={register} className="form-control"  className={`form-control ${errors.name ? 'form-control is-invalid' : ' form-control '}`}>
					<option value="female">female</option> 
					<option value="male">male</option>
					<option value="other">other</option>
					</select>
					{errors.gender && <p className="gender" > Please select gender </p>}
				  <div className="form-group mt-2">
				  <input type="submit" className="btn btn-primary" />
				  </div>
				
			</form>
			</>
		)
}
export default Signin ;


//https://rusith.me/2019/06/24/react-form-validation-using-custom-hooks/
