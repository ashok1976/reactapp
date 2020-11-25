import React from 'react'
 const Count = (props) =>{
	console.log('Render Count Component')
	return(
		<>
	 	 
		 <p>{props.text} {props.calCounter}</p>
		
		</>
	)
}
//export default React.memo(Count)
export default Count