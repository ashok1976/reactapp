import React from 'react';

const  Button = ({children,incrementAge}) =>{
 	 console.log(' Rendering Component',children)

	return(
		<>
		<button onClick={incrementAge}> {children} </button>
		</>
	  )
	
}
export default React.memo(Button);
