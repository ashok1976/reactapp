import React from 'react';
export const renderField = ({input,name, label,htmlFor,className, type, placeholder,id, meta: { touched, error, warning }}) => 
		(<div className={className}>
			<label htmlFor={htmlFor}>{label}</label>
			<input {...input}  className={`form-control ${touched && error ? ' red ' :'' }`}  type={type} placeholder={placeholder} id={id} validate={input.validate}  />
			 {touched && error && (
				<span style={{ fontSize: "10px", color: "red" }}>{error}</span>
				)}
			
		</div>)
	
