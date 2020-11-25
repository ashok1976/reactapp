import React,{useState, useRef,useReducer,useEffect} from 'react';
const initialState = {
	loading: false,
	data: []
	
}
const dataLoad = (data) => {
	return{
		type:'SUCCESS', payload: data
	}
}
const fetchUser = (state, action) => {
	switch(action.type){
		case 'LOADER': return {...state, loading:true}
		case 'SUCCESS': return {...state, loading:false, data:action.payload}
		default: return state
	}
}


export function AddNames(props) {
	const [data, dataList] = useState([]);
	const [names, setNames] = useState({fiirstName:'', lastName:''});
	const [counter, setCouter] = useState({count:0, theme:'blue'});
	const count = counter.count;
	const theme = counter.theme
	const inputEl  = useRef(null);
	const [itemName, setItemName] = useState("");
	const [user, dispatch]= useReducer(fetchUser,initialState)
	
	useEffect(()=>{
		const fetchData = async() => {
			dispatch({type:'LOADER'})
			const result = await fetch('http://jsonplaceholder.typicode.com/users')
			.then(res=>{
					return res.json()
			}).then(result=>{
				dispatch(dataLoad(result));
				
			})
			console.log('ddddd')
		}
		fetchData()
		
	},[])
	

 
	const addData = () => {
		dataList([
			...data,{id: data.length, data:itemName}
		])
		console.log({title: inputEl.current.value })
	}
	const removeNames = (id) => {
		const newData = data.filter(item  =>  item.id !== id);
		dataList(newData);
	  }
 const styles = {fontSize:'14px', color:'#000', clear:'both'}
 const incremeentNumber = ()=>{
	 setCouter(prevState =>{
		 console.log(prevState)
		 return{
			 ...prevState,
			  count: prevState.count+1 
		 }
	 })
 }
 console.log()
	return ( 
		
	  <>	
	  {	
		 user.data == false ? 'Loading ....' : user.data.map(item =>  <p key={item.id}>{item.name} </p>)
			
			
		}



	  
	<section className="container mb-1">
		<h3>Name add in functional component </h3>
		{count}{theme} <button onClick={incremeentNumber}> + </button>
		
		
		
		
		<div className="row ">
			<input type="text" className="form-control"  name="name"  value={itemName} ref={inputEl} 
			onChange={e => setItemName(e.target.value)}  />
			<button className="mt-2 btn btn-primary"  onClick={addData}>Add Names</button>
		</div>
		<div className="row mb-4">
				<h2> How to store data in object useState {JSON.stringify(names)}</h2></div>
		<div className="row mb-4">

		<label>First Name</label>
			<input type="text" className="form-control"  name="fiirstName" value={names.firstName} onChange={e => 
			setNames({...names,firstName:e.target.value})}  />
		</div>
		<div className="row ">
		<label>Last Name</label>
			<input type="text" className="form-control"  name="lastName" value={names.lastName}  onChange={e => setNames({
				...names,
				lastName:e.target.value})}  />
		</div>
		<ul style={styles}>
			{ data.map(item => { return <li id={item.id} key={item.id} >
						{item.data}	<button type="button" onClick={()=> removeNames(item.id)}>x</button>
					</li>
				})
			}
			 
		</ul>
		
	</section>

  </>
  );
}

