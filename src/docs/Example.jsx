import React from 'react';
import PropTypes from 'prop-types'
import CodeExample from './CodeExample';
import style from 'styled-components';

const Wrapper = style.div`
	padding: 0px 25px;
    background: #f6f7f9;
    border: 1px solid #e6ecf1;
    border-radius: 2px;
    margin-bottom: 20px;
`;

const Link = style.a`
  color: #2d4bff;
  font-size: 14px;
`;

/** Wrap the buttons for display in a flex div */
const ExampleWrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
                <ExampleWrapper>
                    <ExampleComponent/>
                </ExampleWrapper>
                <p>
                    <Link href={"#"} onClick={this.toggleCode}>
                        {showCode ? "Hide" : "Show"} Code
                    </Link>
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