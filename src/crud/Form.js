import {useForm} from './useForm'
	const Form = () => {
	const {  values, handleChange, handleSubmit } = useForm();
	return(
		<>
			<div className="control">
			<input type="email" name="email" onChange={handleChange} value={values.email || ''} required />
			</div>
		</>
	)
}

//https://dzone.com/articles/crud-operations-using-reactjs-hooks-and-web-api