import React from 'react';
const style = { "border": "1px dashed #000", "width": "50%" , "margin":"15px" }

class Filter extends React.Component{ 
		constructor(props){
			super(props)
		}
		
	render(){	
	//https://www.youtube.com/watch?v=LJqbaxPSPKc	
		return ( 
			  <>	 
				<div className="col-3">Length: {this.props.count }</div>
				<div className="col-3"><select value={this.props.sort} onChange={this.props.orderProducts}>
				<option value="order">Order</option>
				<option value="Latest">Latest</option>
				<option value="Highest">Highest</option>
				</select></div>
				<div className="col-6"><select  value={this.props.size} onChange={this.props.filterProducts}>
				<option value="Size">Size</option>
				<option value="M">M</option>
				<option value="P">P</option>
				<option value="XL">XL</option>
				<option value="XXL">XXL</option>
				</select></div>
				
<div className="col-md-12" style={style}></div>

					{
						
					
						
						
						}
						
			  </>
			 );
	}
}
export default Filter