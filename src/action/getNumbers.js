import {GET_NUMBER_BASKET} from './types';
export const getNumbers = () => {
	return (dispatch) => {
		dispatch({type : GET_NUMBER_BASKET})
	}
}


