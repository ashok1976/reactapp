import React, { Component,useState } from "react";
import './accordin.css';


const AccordionItem = ({ label, isCollapsed, handleClick, children }) => {
  return (
    <>
      <button className="accordion-button" onClick={handleClick}> {label}  </button>
        <div className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-expanded={isCollapsed} >
         {children}
       </div>
    </>
  );
};

const Accordion = ({ defaultIndex, onItemClick, children }) => {
	
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  const changeItem = itemIndex => { 
		if(typeof onItemClick === 'function'){
				onItemClick(itemIndex)
			};
		if(itemIndex !== bindIndex){
				setBindIndex(itemIndex)
			};
  };
  const items = children.filter(item => item.type.name === 'AccordionItem');

  return (
    <>
      {items.map(({ props }) => (
        <AccordionItem 
			isCollapsed={bindIndex !== props.index}    
			label={props.label}    
			handleClick={() => changeItem(props.index)
		}
          children={props.children}
        />
      ))}
    </>
  );
};

 class AccordionTab extends Component {
  render() {
    return (
      <>
			<Accordion defaultIndex="1" onItemClick={console.log}>
			<AccordionItem label="A" index="1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </AccordionItem>
			<AccordionItem label="A" index="3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </AccordionItem>
			<AccordionItem label="B" index="2">Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 ipsum dolor sit amet, consectetur adipiscing elit. lor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</AccordionItem>
			</Accordion>
       
      </>
    );
  }
}

export default AccordionTab;