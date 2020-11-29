import React,{useState} from 'react';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';

const SignInForm = (props)=>{
	 var {firstName, lastName} = props.formData
    console.log(firstName);
	
	
	
		

			return(
				<div>
				
				<table>
					<tbody >
						{lastName
							
						
						
					
						
						}
					</tbody >
				</table>
				
				
				</div>
				
		)
}
const mapStateToProps = (state) => {
	return{formData:getFormValues('form')(state)}
	
}


export default connect(mapStateToProps)(SignInForm);
/*
import { Field } from 'redux-form';
import TextInput from './TextInput'
import SaveBar from './SaveBar'
//https://www.digitalocean.com/community/tutorials/managing-form-state-in-react-with-redux-form.amp
//https://medium.com/@pnpsegonne/tutorial-creating-a-form-with-react-redux-c1b3025cf26b
// <TextInput handleChange={handleChange} title="Name" value={formEdit.title}  />
				//<SaveBar />
*/