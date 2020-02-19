import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class AddContacts extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {} //store errors if any
	}

	// listens to keyboard inputs and updates the state along with it
	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onsubmit = async (dispatch, e) => {
		e.preventDefault()
		const { name, email, phone } = this.state

		// Check for the Errors (Empty fields)
		if (name === '') {
			this.setState({ errors: { name: 'Name is Required' } })
			return
		}
		if (email === '') {
			this.setState({ errors: { email: 'Email is Required' } })
			return
		}
		if (phone === '') {
			this.setState({ errors: { phone: 'Phone is Required' } })
			return
		}

		const newContact = {
			name,
			email,
			phone
		}

		const res = await axios.post(
			'https://jsonplaceholder.typicode.com/users',
			newContact
		)
		dispatch({ type: 'ADD_CONTACT', payload: res.data })

		// Redirecting
		this.props.history.push('/')

		// clear the input fields
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		})
	}

	render() {
		// Destructure  the state
		const { name, email, phone, errors } = this.state

		return (
			<Consumer>
				{value => {
					const { dispatch } = value
					return (
						<div className='card mb-5'>
							<h3 className='card-header'>Add Contacts</h3>
							<div className='card-body'>
								<form onSubmit={this.onsubmit.bind(this, dispatch)}>
									<TextInputGroup
										label='Name'
										type='text'
										name='name'
										value={name}
										placeholder='Enter Name...'
										onChange={this.onChange}
										error={errors.name}
									></TextInputGroup>
									<TextInputGroup
										label='Email'
										type='email'
										name='email'
										value={email}
										placeholder='Enter email...'
										onChange={this.onChange}
										error={errors.email}
									></TextInputGroup>
									<TextInputGroup
										label='Phone'
										type='text'
										name='phone'
										value={phone}
										placeholder='Enter phone...'
										onChange={this.onChange}
										error={errors.phone}
									></TextInputGroup>

									<button
										type='submit'
										className='btn btn-block btn-primary btn-lg'
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default AddContacts
