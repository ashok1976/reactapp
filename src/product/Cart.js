import React from 'react';
const Cart = (props) => { 
		
			return ( 
			
		  <>	 
			<section className="form-group">
			{
					props.cartItem.length === 0 ? 'Data is not available' :	<h3>Cart{props.cartItem.length}</h3>
				
			}
		</section>
			  </>
			 );

}

export default Cart