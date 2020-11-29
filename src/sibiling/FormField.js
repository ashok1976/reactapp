import React from 'react';
const  FormField = ({label,type,name,className,value,onChange}) => {
		return ( 
				<>	     
				<div className="row mt-3" >
				 <label>{label}</label>
				 <input type={type} name={name} className={className} value={value} onChange={onChange} />
				</div>
				
				</>
		);

}

export default FormField;
