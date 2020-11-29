import React from 'react';
import PropTypes from 'prop-types'; // ES6

const Pen = (props) =>{
	console.log(props)
	return(
	<>
		<li id={props.id + 1}><h3>{props.title}</h3>
		<span> {props.author}</span>

		</li>
	
	
	</>
	)
  
}

Pen.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  runing:PropTypes.bool.isRequired
};

export default Pen;



	

