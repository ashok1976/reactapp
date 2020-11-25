import React, { useState, useEffect } from 'react'  
import axios from 'axios';  


export const CreateEmployeeValidation = (values) => {
  let errors = {};
  return errors;

if (!values.email) {
    errors.email = 'Email address is required';
  }

}

//https://dzone.com/articles/crud-operations-using-reactjs-hooks-and-web-api