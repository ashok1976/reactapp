import React,{useState,useEffect} from 'react' ;
import DatePicker from "react-datepicker";
import addDays from 'date-fns/addDays';
import "moment/locale/nl";



export const DateSelector = (props) => {
 const handleCalendarClose = () => console.log("Calendar closed");
 const handleCalendarOpen = () => console.log("Calendar opened");
 // var tempDate = new Date();
 // var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() 
  //const currDate = "Current Date= "+date;
	return(
		<>
	
			<DatePicker 
			selected={props.myDate} 
			onChange={date =>  props.setDateFun(date)}
			minDate={new Date()}
			maxDate={addDays(new Date(), 7)}
			//	dateFormat="dd/MM/yyyy"
			onCalendarClose={handleCalendarClose}
			

			/>
  

			
				
				 
				{/*
				<DatePicker  placeholderText='DD/MM/YYYY'
				 selected={date} monthsShown="2"
				 className="form-control"
				 
				 onChange={date => setDate(date)}
				 timeInputLabel="Time:"
				 dateFormat="MM/dd/yyyy h:mm aa"
				 customInput={<ExampleCustomInput />}

					closeOnScroll={true}
					
					opperClassName="form-control"
					timeCaption="time"
					popperModifiers={{offset:{enabled: true,offset: "5px, 10px"},preventOverflow: {enabled: true,escapeWithReference: false,boundariesElement: "viewport"}
					}}
					disabled
					showTimeSelect showYearDropdown  
					
				 
				
				 />
				 */
				 }
				
			
	
		</>
		)

}
