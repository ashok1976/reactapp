import React from 'react';

const  Title = () =>{
 	 console.log(' Rendering Title Component')
	return(
		<>
			UseCall back hook.
		</>
	  )
}
export default React.memo(Title);
