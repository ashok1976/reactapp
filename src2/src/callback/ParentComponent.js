import React,{useState,useCallback,useEffect} from 'react';
import Button from './Button'
import Title from './Title';
import Counter from './Counter';
import PensList  from './PensList'

const ParentComponent = () => {
	const [age, setAge] = useState(18);
	//const [list, setList] = useState(pensList);
	const [sallary, setSallary] = useState(5000)
 const incrementAge = useCallback(() => {
	 setAge(age+1)
 },[age])
 const incrementSallary = useCallback(() =>{
		 setSallary(sallary+1)

 },[sallary])
	return(
		<>
		<h1> useCallback Hook examples</h1>
				<Title /> <br/>
				<Counter text="Age" count={age}/><br/>
				<Button incrementAge={incrementAge}> Increamentg Age</Button><br/>
				<Counter text="Age" count={sallary} /><br/>
				<Button incrementAge={incrementSallary}> Increamentg Sallary</Button>

		
		<PensList/>
		</>
	  )
}
export default ParentComponent;
