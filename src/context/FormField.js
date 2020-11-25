import React from 'react';
export const FormField = ({label,type,placeholder,name,onChange,value}) => {
	return ( 
		<>
			<div className="form-group">
				<label>{label}</label>
				<input type={type} className="form-control"  
				placeholder={placeholder} value={value} 
				name={name} onChange={ onChange}
				  />
			</div>
		</>
		);
	}

