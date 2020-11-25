import React from 'react';

import PropTypes from 'prop-types';
export const Post = (props) => {
	
	//const {item} = props
	return ( 
	  <>	     
		<ul>
			{
			<li>
				<h5>{props.user}</h5>
				<p>{props.id} : {props.content}</p>
			</li>
			}
		</ul>
	

  </>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}
