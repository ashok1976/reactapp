import React from 'react';

export class TabManager extends React.Component{ 

	render(){
		const {activeTab, handleTab,tabs} = this.props
		return ( 
		  <>
			<ul>		  
		  {tabs.map(({label,value})=>(
			<li key={label} onClick={()=>handleTab(value)} className={ value === activeTab ? 'active' : ''}>{label}</li>
		  ))}
		  </ul>
		 </>
			  );
	} 
}


