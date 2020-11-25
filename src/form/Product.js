import React,{useState,useRef} from 'react';
import {TabManager} from './TabManager'
	const tabs = [
	{'label': 'tab one', discription:' Content available in India', value:1},
	{'label': 'tab two', discription:' Content available in India' , value:2},
	{'label': 'tab thre', discription:' Content available in India', value:3}
	]
export const Product = (props)=> { 
	const [data, setDatalist] = useState([])
	const inputEl  = useRef(null);
	const [name, setName] = useState("")
	const [tab, setTab] = useState(2);
	console.log(props.location.path)
	
	const addNames = () => {

		setDatalist([
			...data,{id: data.length, data:name}
			])
		}
	
		
		
	const deleteProduct =(id)=>{
		const newData = data.filter(product => product.id !== id);
		setDatalist(newData)
	
	}
	
 const handleTab = (type) =>{
	 setTab(type)
	 
 }


		return ( 
		  <>
			  <div className="container">
				<section className="form-group">
					<h3>Product Name</h3>
					<div className="row mb-2">
					<div className="col-10">
					<label>Product Name</label>
						<input type="text" className="form-control"  name="name"  value={name} ref={inputEl} 
			onChange={e => setName(e.target.value)}  />
					</div>
					<div className="col-2">
					<label className="row">&nbsp;</label>
						<button className="btn btn-primary " onClick={addNames}>Add Names</button>
					</div>
						
					 </div>
					
					<ul>
						{data.map((val,index)=>(
							<li key={index}>{val.data} <span className="btn btn-primary" onClick={()=>deleteProduct(val.id)}>X</span></li>
							))}
					</ul>
					</section>
					

					<section>
						<TabManager tabs={tabs} handleTab={handleTab} activeTab={tab} />
						<div> {tab}</div>
					</section>
						
						{props.match.params.id}
					
				</div>
			  </>
		);

}


