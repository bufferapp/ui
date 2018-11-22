import React from 'react';
import PasswordInput from '@bufferapp/components/PasswordInput';


export default class ExampleAllFeatures extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<div>
                <PasswordInput
                htmlId={"password-input-example "}
                name={"password"}
                onChange={event=> this.setState({password: event.target.value})}
                value={this.state.password}
                minLength={8}
                placeholder={"Enter password"}

                />
            </div>
		);
	}
}

ExampleAllFeatures.propTypes = {

}