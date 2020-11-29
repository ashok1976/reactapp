import React  from 'react';
import PropTypes from 'prop-types';

const SaveBar  = ({onDiscardAction,open,onSaveAction,}) => 
	( 
			open 
			
			? 
				<div className="SaveBar">
					<span>Seems like you modified something, want to save it ?</span>
					<button onClick={onDiscardAction}>DISCARD</button>
					<button onClick={onSaveAction}>SAVE</button>
				</div>
			: null
		)

SaveBar.propTypes = {
	onDiscardAction : PropTypes.func,
	open:PropTypes.string,
	onSaveAction:PropTypes.func
}
SaveBar.defaultProps  ={
	handleChange :  console.info('Discard'),
	onSaveAction:console.info('onSaveAction')
}

export default SaveBar 
//https://www.digitalocean.com/community/tutorials/managing-form-state-in-react-with-redux-form.amp