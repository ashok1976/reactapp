import React, { useCallback,useState} from 'react';
import Title  from './Title'
import Count  from './Count'
import BtnComponent  from './BtnComponent'
const style={marginTop:10, marginBottom:10}
export const ParentComponent = (props) => {
		const[age, setAge] = useState(24);
		const[salary, setSalary] = useState(5000)
		const title ="This is a title of page";
		
	const incrementAge = useCallback(() =>{
			setAge(age + 1)
			
		},[age])
		
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary]);
	
	return(
		<>
		<h4 style={style}> Parent Component </h4>
		
		<Title title={title} />
		<Count text="Age" calCounter={age}/>
		<BtnComponent  text="Increment Age" hadleClick={incrementAge} />
		<Count text="Salary" calCounter={salary}/>
		
	
		</>
	)
}