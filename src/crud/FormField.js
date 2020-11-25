import React from 'react';
export const FormField = React.forwardRef((props,ref) => {
	const{className,name,placeholder,value,defaultValue} = props
	return (
		<>
		
				<label>{defaultValue}</label>
				 <input type="text" className={className} name={name}  placeholder={placeholder} ref={ref} defaultValue={defaultValue} value={value}/>
		
		</>
	)
})