import React from 'react';
import { connect } from 'react-redux';
const ListItem  = (props) => {
	const {user} = props
			return (
				<>
					{
					user.map(val => <div key={val.id}>{val.name}</div>)
					}
				</>
	)
}
const mapStateToProps = state => ({user:state.saga.data})
export default connect(mapStateToProps)(ListItem)