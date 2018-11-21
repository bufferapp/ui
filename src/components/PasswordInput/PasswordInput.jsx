import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "../TextInput/TextInput";

export default class PasswordInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    showPassword: false
		}
	}



	render() {
	    const {htmlId, value, label, error, onChange, placeholder, maxLength, quality, ...props} = this.props
		return (
			<TextInput htmlId={htmlId} label={label} onChange={onChange}
                       value={value}
                       placeholder={placeholder}
                       error={error}
                       type={'password'}
                       maxLength={maxLength}
                       required
                       {...props}

            />
		);
	}
}

PasswordInput.propTypes = {
    /** htmlId */
    htmlId: PropTypes.string.isRequired,

    name: PropTypes.string.isRequired,

    value: PropTypes.any,

    label: PropTypes.string,

    onChange: PropTypes.func.isRequired,

    maxLength: PropTypes.number,

    placeholder: PropTypes.string,

    error: PropTypes.string,
}

PasswordInput.defaultProps = {
    maxLength: 50,
    label: 'Password'
}