import React from 'react';

const Posts = (props) => { 

		return( 
				<>
					<ul>
				{
					props.post.map((val,index) => {
					return <li key={index}>{val.title}</li>
					})
					
				}
				</ul>
				</>
			);

}


export default Posts