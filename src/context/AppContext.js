import React,{useReducer,useEffect,createContext } from 'react';
import { myContext } from './myContext'
const initialState = {
  contacts: [
    {
      id: "098",
      name: "Ashok kumar",
      email: "Ashok@dainikbhaskar.com"
    },
    {
      id: "099",
      name: "Sanjay Wayne",
      email: "sanjay@dainikbhaskar.com"
    },
    {
      id: "100",
      name: "Rajesh Kumar",
      email: "rajes@dainikbhaskar.com"
    }
  ],
  loading: false,
  error: null
};

const reducer = (state,action)=>{
	console.log(state)
	switch(action.type){
		case 'ADD_CONTACT':
		return {
			contacts:[...state.contacts, action.payload]}
		case 'DEL_CONTACT':return {
			...state, contacts: state.contacts.filter((val) => val.id != action.payload)
		}
		default:return state;
	}
}


export const AppContext  = (props) => { 
	const [state, dispatch] = useReducer(reducer, initialState);
		return( 
		  <myContext.Provider value={[state,dispatch]}>
			  {props.children}
		 </myContext.Provider >
		);
}


