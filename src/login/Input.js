import React from 'react';
export const Input  = ({label,value,name,placeholder,onChange,register,type,className}) => { 
	return( 
			<>
				  <div className="form-group mb-3">
					<label htmlFor={name}>{label}</label>
					<input type="{type}" 
					className={className}
					value={value}  
					name={name} 
					placeholder={placeholder}
					onChange={onChange}
					ref={register}
					/>
				  </div>
				  
			</>
		);
}
