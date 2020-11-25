import React from 'react';
export const TableRow = (props) => {
	return ( 
		<>
			<tr onClick={props.handleClick}>
				<td width="20">{props.id}</td> 
				<td  width="20">{props.name}</td> 
				<td  width="60">{props.email}</td> 
			</tr>
		</>
		);
	}

