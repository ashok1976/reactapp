export const formValidate = values => {
  const errors = {}
  if (!values.firsName) {
    errors.firsName = 'Required'
  } else if (values.firsName.length < 3 ) {
    errors.firsName = 'Must be 15 characters'
  } else if (values.firsName.length > 15) {
    errors.firsName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } 
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.mobile) {
    errors.mobile = 'Required'
  } else if (isNaN(Number(values.mobile))) {
    errors.mobile = 'Must be a number'
} else if (values.mobile.length < 10) {
    errors.mobile = 'Must be 10 characters'
  }else if(values.mobile.length > 12){
	  errors.mobile = 'Must be 12 characters or less'
  }
  /*
   if (!values.mobile) {
    errors.mobile = 'Required'
  } else if (isNaN(Number(values.mobile))) {
    errors.age = 'Must be a number'
  } else if (Number(values.mobile) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }*/
  return errors
}
