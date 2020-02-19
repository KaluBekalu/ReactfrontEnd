import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../Context'

class Contacts extends Component {
	deleteContact = id => {
		const { contacts } = this.state
		const newContactList = contacts.filter(con => con.id !== id)
		this.setState({
			contacts: newContactList
		})
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value
					return (
						<React.Fragment>
							<h1 className='display-4 mb-4'>
								{' '}
								<span className='text-danger'> Contact </span>List
							</h1>
							{contacts.map(contact => (
								<Contact key={contact.id} contact={contact} />
							))}
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}
}
export default Contacts
