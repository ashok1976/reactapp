import React from 'react';
import {connect} from 'react-redux';
import data from './../data.json'
import {addBasket} from './../action/addBasket';
import Cart from './../product/Cart'
import Products from './Products'
import Filter  from './Filter'

class ShoppingProduct extends React.Component{ 
		constructor(props){
			super(props)
				this.state = {
					product:data.products,
					size:'',
					sort: '',
					cartItem: []
				}
				console.log(this.state)
			
		}
		componentDidMount(){
			this.props.addBasket(); 
		}
	orderProducts = (event) => {
			const sort = event.target.value;
				this.setState({
					sort : sort, 
					product: data.products.slice()
					.sort((a,b) => 
					sort === "Highest" ?  a.price > b.price ? -1 : 1 : 
					sort === "Latest" ? a.price < b.price ? -1 : 1 : a.id < b.id ? -1 : 1 )
				})
			console.log(this.state.product)
	}
	filterProducts= (event) =>{
		if(event.target.value === ""){
		this.setState({
			size:event.target.value, product:data.products
		})	
		}else{
		this.setState({
			size:event.target.value,
			product:data.products.filter((items) => items.availableSize.indexOf(event.target.value) >=0 )
		})
		}
	}
	addCart = product  => {
		//alert()
		const cartItem = this.state.cartItem.slice();
		let alreadyCart = false;
		cartItem.forEach(item =>{
			if(item.id === product.id){
				item.count++;
				alreadyCart = true;
			}
		})
	if(!alreadyCart){
	//	cartItem.push(...state, count +1);
		
		
	}
	this.setState({cartItem})
		
	}
	
	removeCart = product => {
		const cartItem = this.state.cartItem.slice();
		this.setState({
			product : cartItem.filter(item => item.id != product.id)
		})
		
		
	}
		
	render(){	

		console.log(this.state)
		return ( 
			
		  <>	 
			<section className="form-group">
				
				<p>  
				curent number   total items {}</p>
				<div className="row ">
				<Filter count={this.state.product.length}
					size={this.state.size} 
					orderProducts = {this.orderProducts}
					filterProducts ={this.filterProducts} 
					sort={this.state.sort} 	/>
				</div>
				<div className="d-flex align-content-start flex-wrap">
				<div className="d-flex align-content-start flex-wrap col-9">
					{ 
					this.state.product.map((val,index) =>
							 (<div className="col-3" key={index}> <Products data={val}  addCart ={this.props.addBasket} /></div>)
							 )
					}
					
					</div>
					<div className="col-3"><Cart cartItem={this.state.cartItem}/></div>
			</div>
		</section>
			  </>
			 );
	}
}
export default connect(null,{addBasket})(ShoppingProduct)