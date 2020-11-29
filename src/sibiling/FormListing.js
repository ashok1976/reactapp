import React from 'react';
import TableRow from './TableRow'
const  FormListing = props => {
	const {data} = props
		return ( 
				<>	     
				<label> Form Listing</label>
				<table width="98%" cellPadding="5" cellPadding="5" border="1">
				 <tbody>
					{
					data.map((val, index)=>  <TableRow data={val} key={index} />)
					}
				 </tbody>
				</table>
				
				</>
		);

}

export default FormListing;
