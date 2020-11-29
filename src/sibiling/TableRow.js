import React from 'react';
const  TableRow = ({data}) => {
	return ( 
				<tr>
					<td width="40%">{data.name}</td>				
					<td width="60%">{data.email}</td>				
				</tr>
		);

}
export default TableRow;
