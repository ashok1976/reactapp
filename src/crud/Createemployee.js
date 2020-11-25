import React, { useState } from 'react' ;
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import {FormField} from './FormField'
import {DateSelector} from './DateSelector'

export const Createemployee = (props) =>{
	const {register, handleSubmit, errors } =  useForm();
	//const [selectedDate, SetSelectedDate] = useState({})
	const [formData, setformData] = useState({})
	const [startDate, setStartDate ] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());


	const apiUrl = "http://localhost:3001/CreateEmp";  
	const onSubmit = (data)=>{
		const formData = {
				Name: data.Name, 
				Mobile: data.Mobile,
				Email: data.Email, 
				Gender: data.Gender,
				StartDate:startDate,
				EndDate:endDate

	}
	  axios.post(apiUrl,formData);
	  console.log(formData)
	}
	const onChange = (event) => {
		event.persist();
	}
	
	const startDateFun = date => setStartDate(date)
	const endDateFun = date => setEndDate(date)
const today = new Date();
	return(
	
		<>
		<ul>
			<li className="nav-item"><Link className="nav-link" to="/employeList">EmployeList </Link></li>
			
		</ul>
		<form onSubmit={handleSubmit(onSubmit)}>
			 
		<div className="row mt-3">
		<div className="col-6">
				<label>Name</label>
				<input type="text" className="form-control"  name="Name" onChange={onChange} ref={register({required:"Name is invalid", minLength:{value:5,	message:"too short"},maxLength:{value:12, message:"too long"}}) }   />
				{errors.Name && <p>{errors.Name.message}</p> }
			</div>
			<div className="col-6">
				<FormField className="form-control" text="text" name="Mobile" onChange={onChange}  placeholder="Enter your department" 
				ref={register({required:"required"})}  />
				{errors.Mobile && <p>{errors.Mobile.message}</p> }
			</div>
		</div>	

		<div className="row mt-3">
			<div className="col-6">
			<FormField className="form-control" text="number" name="Email" onChange={onChange}  placeholder="Enter your Email" 
			ref={register({required:"invalid email",pattern:{
				value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message:'invalid email address'
				
			}})} />
			{errors.Email && <p>{errors.Email.message}</p> }
		</div>
		<div className="col-6">
			<FormField className="form-control" text="text" name="Gender" onChange={onChange}  placeholder="Enter your City" ref={register({required:"required"})} />
			{errors.Gender && <p>{errors.Gender.message}</p> }
		</div>
		</div>
		
		<div className="row mt-3">
			<div className="col-6">
			<DateSelector myDate={startDate} setDateFun={startDateFun} />
			</div>
			<div className="col-6">
			<DateSelector myDate={endDate}  setDateFun={endDateFun} />
			</div>
		</div>
		
		<div className="row mt-3">
			<button type="submit" className="btn btn-primary">Submit</button>
		</div> 
			</form>
		</>
	)
}

//https://dzone.com/articles/crud-operations-using-reactjs-hooks-and-web-api