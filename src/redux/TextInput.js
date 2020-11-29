import React from 'react';
import {PropTypes } from 'prop-types'
const TextInput = ({handleChange, title, value}) => {
	return(
			<div>
			<label>{label}</label>
				<input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
			</div>
		)
}
TextInput.propTypes  =	{
	handleChange : PropTypes.func,
	value:PropTypes.string,
	title:PropTypes.string
}
TextInput.defaultProps  ={
	handleChange : (event) => console.log('new Value', event.target.value ),
	value:null,
	title:null
}

export default TextInput
//https://www.digitalocean.com/community/tutorials/managing-form-state-in-react-with-redux-form.amp