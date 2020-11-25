import React,{useState,useEffect} from 'react' ;
import axios from 'axios';

export const EmployeList = (props) => {
	const [data,setData] = useState([])
	
	const apiUrl = "http://localhost:3001/employees";  
	useEffect(()=>{  
		loadData();
	},[])
	
	const loadData = async() => {
		const result = await axios(apiUrl)
		setData(result.data.response)
	}
	/*
let option = {
		headers:{
			'Content-Type':  'application/json',
			'Access-Control-Allow-Credentials':'true',
			'Access-Control-Allow-Origin': '*',
			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE"
	
		}	
	}
	*/
	
	let URL = 'http://localhost:3001/employees'
	const deleteeployee = (id) =>{
		axios.delete(URL + '/' + id)
		loadData();
	}
	const editemployee = (id) =>{
	 props.history.push({pathname:`/edit/${id}` });
	}

	return(
			<>
	<table width="100%">
			<tbody>
				<tr>  
				<th>Name</th>  
				<th>Mobile</th>  
				<th>Email</th>  
				<th>Gender</th>  
				<th>start Date</th>  
				<th>end Date</th>  
				<th>Action</th>  
				</tr>  
			 {
				 data.map(val=> {
					return <tr key={val.id}>
							<td>{val.Name}</td>
							<td>{val.Mobile}</td>
							<td>{val.Email}</td>
							<td>{val.Gender}</td>
							<td>{val.StartDate}</td>
							<td>{val.EndDate}</td>
							<td>
							<button className="btn btn-warning" onClick={() => {editemployee(val.id) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => {deleteeployee(val.id) }}>Delete</button>  
							</td>  
						 </tr> 
					})
				
			 }
			 </tbody>
			  </table>		
		</>
	)
}
