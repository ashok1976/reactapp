import React from 'react';

const Products  = (props) => { 
		const {data} = props;
		
		return ( 
			  <>	
					
						
							<div key={props.data.id} >
							<p> <strong>{props.data.title} </strong> <br/>
							{props.data.description}</p>
							<img src={props.data.images} />
							<p className="mt-3 mb-2"><strong>Price</strong> {props.data.price} 
							 <button className="btn btn-outline-primary" onClick={()=> props.addCart(props.data)}> Add To Cart</button>
							</p>
							</div>
							
		
							
						
			  </>
			 );
	
}
export default Products