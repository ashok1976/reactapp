import React from 'react';

const initialState = {
	loading:true,
	data:[]
	
}

export const useReducer = (state=initialState, action) =>{
	switch(action.type){
		case 'LOADING':
		return{...state, loading:true}
		break;
		case 'SUCCESS' :
		return {...state, loading:false, data:action.payload}
		break;
		default : return state;
	}
}

/*

const inState = {
	loading:true,
	mydata:[]
	
}
export const useReducers = (state=inState, action) =>{
	switch(action.type){
		case 'LOADING':
		return{...state, loading:true}
		break;
		case 'SUCCESS' :
		return {...state, loading:false, mydata:action.payload}
		break;
		default : return state;
	}
}
*/