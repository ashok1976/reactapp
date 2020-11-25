
import {ADD_PRODUCT_BASKET,REMOVE_PRODUCT_BASKET,GET_NUMBER_BASKET} from './../action/types'
const initialState  ={
		counter : 0,
		price:0,
		products: {
			product_1:{name:'product_1', price:300, number:0, inCart: false},
			product_2:{name:'product_2', price:400, number:0, inCart: false},
			product_3:{name:'product_3 ', price:500, number:0, inCart: false}
		},
		cartCost : 0,
		number:0
}
const basketReducer = (state  = initialState , action) => {
	switch(action.type){
		case ADD_PRODUCT_BASKET: 
			let addQuantity = {...state.products[action.payload]};
			addQuantity.number += 1;
			addQuantity.inCart = true;
			console.log(addQuantity.number)
			
		return{
		...state, 
		counter: state.counter + 1, 
		products:{...state.products, [action.payload]:addQuantity}
		
		};
		case 'REMOVE_PRODUCT_BASKET': return {...state, counter: state.counter - 1}
		default : return state;
	}
}
export default basketReducer;

