import {GET_NEWS,NEWS_RECEIVED } from './actionType';
export const getData = () => ({type:GET_NEWS})

export const receiveData = (id) => {
	return{type:NEWS_RECEIVED, payload:id}
}