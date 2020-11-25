import {REMOVE_PRODUCT_BASKET} from './types';
export const removeBasket = () => {
	return (dispatch) => {
		dispatch({type : REMOVE_PRODUCT_BASKET})
	}
}


