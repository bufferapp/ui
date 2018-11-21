import React from 'react';
import PropTypes from 'prop-types'
import CodeExample from './CodeExample';
import style from 'styled-components';

const Wrapper = style.div`
	padding: 15px;
    background: #f6f7f9;
    border: 1px solid #e6ecf1;
    border-radius: 2px;
    margin-bottom: 20px;
`;

export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    showCode: false
		}
	}

    toggleCode = event => {
	    event.preventDefault();
	    this.setState(prevState => {
	        return {showCode: !prevState.showCode}
        })
    };



	render() {
	    const {showCode} = this.state;
	    const {code, description, name} = this.props.example;
	    //Must use CommonJS require here to dynamically require components
        const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;

		return (
		    <Wrapper>
                {description && <h4>{description}</h4>}
                <ExampleComponent/>
                <p>
                    <a href={"#"} onClick={this.toggleCode}>
                        {showCode ? "Hide" : "Show"} Code
                    </a>
                </p>
                {showCode && <CodeExample>{code}</CodeExample>}
            </Wrapper>
		);
	}
}

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired

};