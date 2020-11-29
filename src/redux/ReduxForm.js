import React,{useState} from 'react';
import {connect } from "react-redux";
import SignInForm from "./SignInForm";
import { reduxForm, Field } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import {formValidate} from './formValidate';
import {renderField} from './renderField';

/*
const required = value => (value ? undefined : 'Required!');
const longEnough = value => value && value.length >= 3 ? undefined : 'Too short!';
const email = value => value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)? undefined: 'Invalid email!';
*/
const ReduxForms= (props) => {	
	const [showForm, setShowForm] = useState(false)
	const [data, setData] = useState([])
	const {error, handleSubmit,pristine,submitting,valid} = props;

	const handleSignIn = (formValue) => {
	//	alert(JSON.stringify(formValue));
		setShowForm(true)
		const myData = [...data];
		myData.push(formValue)
		setData(myData)
		
		}
	
	return(
			<>
			<div>Redux Form </div>
			<form onSubmit={handleSubmit(handleSignIn)}>
				<Field name="firsName" type="text" component={renderField} label="First Name" className="form-group" htmlFor="firsName" />
				<Field name="lastName" type="text" component={renderField} label="Last Name"  className="form-group"  />
				<Field name="email" type="text" component={renderField} label="Email"  className="form-group"  />
				<Field name="mobile" type="text" component={renderField} label="Mobile" className="form-group"   />
				<div className="radiogroup">
				<Field name="sex" component={renderField} type="radio" value="male" label="Male"  className="form-group"  />
				<Field name="sex" component={renderField} type="radio" value="female" label="Female"  className="form-group"  />
				<Field name="sex" component={renderField} type="radio" value="other" label="Other"  className="form-group"  />
				</div>
				
				<button type="submit" disabled={!valid}>Submit</button>
				<br />
				{ showForm ? <SignInForm data={data}/> : null}
			</form>
		</>
	)
}
export default reduxForm({
	form:"myForm",
	validate: formValidate
})(ReduxForms);
//https://www.pluralsight.com/guides/how-to-wire-up-redux-form-bindings-to-the-form's-inputs