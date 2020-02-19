import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// input field component
const TextInputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	onChange,
	error
}) => {
	return (
		<div className='form-group p-2'>
			<label htmlFor={name} className='lead'>
				{label}
			</label>
			<input
				type={type}
				name={name}
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	)
}

TextInputGroup.prototype = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
}

// default value for the input field type if not provided
TextInputGroup.defaultProps = {
	type: 'text'
}

export default TextInputGroup
