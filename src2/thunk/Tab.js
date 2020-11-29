import React,{useState} from 'react';
const tabList = [
{name:'tab1',label:'Tab 1', content:"tab one contnt"},
{name:'tab2',label:'Tab 2', content:"tab TWO contnt"},
{name:'tab3',label:'Tab 3', content:"tab three contnt"}
]
const Tab = () =>{
		const [currentTab, setCurrentTab] = useState('tab2')
			//console.log(currentTab)
const handleTab =(tab) => {
	console.log(tab)
	//setCurrentTab(currentTab.name)
	}
	return(
	<>
	
	
	{tabList.map( (tab,i)=>{
		return <button key={i}
              onClick={()=> setCurrentTab(tab.name)} className={(tab.name === currentTab) ? 'active' : ''}>
                {tab.label}
            </button>
	
		})
	}
	{tabList.map((tab,i) =>{
		if(tab.name === currentTab){
		 return <li key={i}>{tab.content}</li>
		}else{
			return null
		}
		})
	}
	</>	
		
	)
  
}

export default Tab;



	

