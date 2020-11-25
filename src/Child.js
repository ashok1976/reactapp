import React,{useState, useRef} from 'react';

const initialList = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  }
];

function Child(props) {
	const [list, setList] = useState(initialList);
	const [data, dataList] = useState([]);
	const inputEl  = useRef(null);

	const [itemName, setItemName] = useState("");
    const handleChange = (e) => {
		setList(e.target.value)
	}
	const handleRemove= (id) => {
		const newList= list.filter(item => item.id !== id );
		setList(newList)
	}
	/*
	const addData = () => {
			dataList([
			...data, {id: data.length, data:itemName}
			
			])
			console.log({
								title: inputEl.current.value
							
						})
			
		}
	const removeNames = (id) => {
		const newData = data.filter(item  =>  item.id !=id);
		dataList(newData);
						


	}
	*/

	return ( 
	  <>	     
		
	{props.children}
		<br />	<br />	<br />

	
	<input type="text" name="name"  value={itemName} ref={inputEl} onChange={e => setItemName(e.target.value)}
 />
 
		{
			data.map(item => { 
			return <li id={item.id} key={item.id}>{item.data} <button type="button" onClick={()=> removeNames(item.id)}> *  </button></li>
			})
			
		}
		
		<button onClick={addData}>Add Data</button>	<br />	<br />	<br />
		


  </>
  );
}

export default Child;
