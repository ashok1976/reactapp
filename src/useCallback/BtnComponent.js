import React from 'react'
const BtnComponent  = (props) =>{
	console.log('Rendering '+ props.text)
	return(
		<>
	 	 <button onClick={props.hadleClick}>{props.text}</button>
		
		</>
	)
}
export default BtnComponent
//export default React.memo(BtnComponent)