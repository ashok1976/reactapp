import React, { useState,useEffect } from 'react' ;
import { useHistory,useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'; 
import {FormField} from './FormField'
import {DateSelector} from './DateSelector'
export const EditEmployee  = (props) =>{
	const {register, handleSubmit, errors } =  useForm();
	const [startDate, setStartDate ] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	
	const [employee, setEmployee] = useState({ Name:'', Mobile:'', Email: '',Gender:'', StartDate:'', EndDate:''})
		let history = useHistory();
		const {id} = useParams();
		useEffect(()=>{
			
			loadUser()
		},[]);
	const loadUser = async(e) =>{
			const result = await axios.get(`http://localhost:3001/employees/${id}`)
			
			var obj = JSON.stringify(result.data);
			console.log(obj)
			setEmployee(result.data[0])
		}
	const UpdateEmployee = (event) =>{
			axios.put('http://localhost:3001/employees/:'+id,employee)
		}
		const onChange = (event) => {
			event.persist();
			setEmployee (
			{
				...employee,
				[event.target.name]: event.target.value
			})
			
		}
	const startDateFun = date => setStartDate(date)
	const endDateFun = date => setEndDate(date)
	const {Name, Mobile, Email, Gender, StartDate,EndDate} = employee;
	console.log(employee)
	//let data = JSON.stringify(employee)

	return(
		<>
		<form onSubmit={handleSubmit(UpdateEmployee)}>
			 
		<div className="row mt-3">
		<div className="col-6">
				<label>Name</label>
				<input type="text" className="form-control"  name="Name" 
				placeholder="Enter your Name" 
				onChange={onChange} 
				ref={register({required:"Name is invalid", 
				minLength:{value:5,	message:"too short"}, maxLength:{value:12, message:"too long"}}) }
				defaultValue={Name}
				/>
				{errors.Name && <p>{errors.Name.message}</p> }
			</div>
			<div className="col-6">
				<FormField className="form-control" text="text" name="Mobile" onChange={onChange}
		
				placeholder="Enter your mobile" 
				ref={register({required:"required"})} 
	defaultValue={Name}
				/>
				{errors.Mobile && <p>{errors.Mobile.message}</p> }
			</div>
		</div>	

		<div className="row mt-3">
			<div className="col-6">
			<FormField className="form-control" text="number" 
			name="Email"
			

			onChange={onChange}  
			placeholder="Enter your Email" 
			ref={register({required:"invalid email",pattern:{
				value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message:'invalid email address'
				
			}})} 
			defaultValue={Email}
			/>
			{errors.Email && <p>{errors.Email.message}</p> }
		</div>
		<div className="col-6">
			<FormField className="form-control" text="text" name="Gender" 
			defaultValue={Gender}
			onChange={onChange}  placeholder="Enter your City" ref={register({required:"required"})} />
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
			<button type="submit" className="btn btn-primary">Update Employee Details</button>
		</div> 
			</form>
		</>
	)
}

//https://dzone.com/articles/crud-operations-using-reactjs-hooks-and-web-api