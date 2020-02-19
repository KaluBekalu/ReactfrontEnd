import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../Context'
import axios from 'axios'
class Contact extends Component {
	state = {
		showContactInfo: false
	}
	toggle = () => {
		this.setState({
			showContactInfo: !this.state.showContactInfo
		})
	}
	onDeleteClick = async (id, dispatch) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
		dispatch({ type: 'DELETE_CONTACT', payload: id })
	}

	render() {
		const { name, email, phone, id } = this.props.contact
		const { showContactInfo } = this.state
		return (
			<Consumer>
				{value => {
					const { dispatch } = value
					return (
						<div className='card card-body mb-3'>
							<h4 className='card-header'>
								{name}
								<i
									onClick={this.toggle}
									className='mx-3'
									style={{ cursor: 'pointer' }}
								>
									-^-
								</i>
								<p
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
									style={{ cursor: 'pointer', color: 'red', float: 'right' }}
								>
									x
								</p>
							</h4>
							{showContactInfo ? (
								<ul className='list-group'>
									<li className='list-group-item'>Email: {email}</li>
									<li className='list-group-item'>Phone: {phone}</li>
								</ul>
							) : null}
						</div>
					)
				}}
			</Consumer>
		)
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired
}

export default Contact
