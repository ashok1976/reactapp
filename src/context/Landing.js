import React from 'react';
import {AppContext} from './AppContext'
import {CoontactView} from './CoontactView'
import {ContactForm} from './ContactForm'
import {ContactTable} from './ContactTable'
export const Landing = (props) => {

	return ( 
	  <>
		<AppContext>
		 <h2 as="h3">Contacts</h2>
			<ContactForm />
			<ContactTable />
		</AppContext>	  
	  </>
  );
}

