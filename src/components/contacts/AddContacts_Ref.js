import React, { Component } from 'react'

class AddContacts extends Component {
	constructor(props) {
		super(props)
		this.nameInput = React.createRef()
		this.emailInput = React.createRef()
		this.phoneInput = React.createRef()
	}

	static defaultProps = {
		name: "Kalkidan Bekalu",
		email: "kal@mail.com",
		phone: "555-555-5555"

	}
	onChange = e => {
		this.setState({
			[ e.target.name ]: e.target.value
		})
	}
	onsubmit = (e) => {
		e.preventDefault()
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value
		}
		console.log(contact)
	}
	render() {
		const { name, email, phone } = this.props
		return (
			<div className='card mb-5'>
				<h3 className='card-header'>Add Contacts</h3>
				<div className="card-body">
					<form onSubmit={this.onsubmit}>
						<div className='form-group p-2'>
							<label htmlFor='name' className='lead'>
								Name{' '}
							</label>
							<input
								type='text'
								name='name'
								className='form-control form-control-lg'
								placeholder='Enter Name'
								defaultValue={name}
								ref={this.nameInput}

							/>
						</div>
						<div className='form-group p-2'>
							<label htmlFor='phone' className='lead'>
								Email{' '}
							</label>
							<input
								type='text'
								name='email'
								className='form-control form-control-lg'
								placeholder='Enter Email'
								defaultValue={email}
								ref={this.emailInput}

							/>
						</div>
						<div className='form-group p-2'>
							<label htmlFor='phone' className='lead'>
								Phone{' '}
							</label>
							<input
								type='text'
								name='phone'
								className='form-control form-control-lg'
								placeholder='Enter Phone Number'
								defaultValue={phone}
								ref={this.phoneInput}

							/>
						</div>
						<button type='submit' className='btn btn-block btn-primary btn-lg'>Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default AddContacts
