import axios from 'axios';
 var apiUrl = "http://localhost:3001/";
  class EmployeeService {

	 getEmployee(){
		 return axios.get(apiURL)
	 }
	 
 }
 export default new EmployeeService()