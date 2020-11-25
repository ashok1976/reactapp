import {ADD_PRODUCT_BASKET} from './types';
function addCart(product) {
  return {type: ADD_PRODUCT_BASKET,payload:product};
}

export const addBasket = (productName) => {
		return (dispatch) => {
			console.log('Adding to Basket-----------')
			console.log("Products:", productName)
			dispatch(addCart(productName));
		}
}

//export default addBasket