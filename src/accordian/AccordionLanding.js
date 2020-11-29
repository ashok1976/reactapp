import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Accordion from './Accordion';
import AccordionTab from './AccordionTab';


class AccordionLanding extends Component{
	constructor(props){
		super();
		this.state ={
			
		}
	}
	
	
   render() {
   return (
	<>
      <h1>Accordion Demo</h1>
      <Accordion>
        <div label='Alligator Mississippiensis'>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </div>
        <div label='Alligator Sinensis'>
           <p>
            <strong> Endangered Status: </strong> Critically Endangered
          </p>
        </div>
      </Accordion>
	    <Accordion allowMultipleOpen>
        <div label='Alligator Mississippiensis'>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </div>
        <div label='Alligator Sinensis'>
     
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div>
      </Accordion>
	  
	  
	  <AccordionTab/>
      
     </>
    );
  }
}

export default AccordionLanding;