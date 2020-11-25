import React,{useContext,useState} from 'react';
import {myContext} from './myContext'
import {TableRow} from './TableRow'
import {ContactForm} from './ContactForm'
export const ContactTable = (props) => {
	const [state,dispatch] = useContext(myContext);
	const [selectedId, setSelectedId] = useState();
	const setID = (id) => {
			setSelectedId(id)
	}
	
	const deleteItem = (id) =>{
			dispatch({type: "DEL_CONTACT",payload: id});
		}
	const onRemoveUser = () =>{
			deleteItem(selectedId)
			setSelectedId(null)
		}
	return ( 
	  <>
	 
	  <table width="100%" border="1">
	  <tbody>
			{ state.contacts.map((val,index) => ( 
					
				<TableRow {...val} key={val.id} handleClick={()=>setID(val.id)} className={val.id == selectedId ? 'active' : ''} />
						))
				}
				 </tbody>
	   </table>
	   <button disabled={!selectedId} onClick={onRemoveUser}
              >Remove User
              </button>
	  </>
  );
}

