import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import CodeExample from './CodeExample';


const Wrapper = style.div`
  padding: 5px 25px;
  background: #f6f7f9;
  border: 1px solid #e6ecf1;
  border-radius: 2px;
  margin-bottom: 20px;
  min-width: 42%;
  max-width: 42%;
  margin-right: 20px;
  min-height: 100px;
`;

const CodeButton = style.a`
  color: #828485;
  padding-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

/** Wrap the buttons for display in a flex div */
const ExampleWrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = style.div`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCode: false,
    };
  }

  toggleCode = (event) => {
    event.preventDefault();
    const { showCode } = this.state;
    this.setState({ showCode: !showCode });
  };


  render() {
    const { showCode } = this.state;
    const { example, componentName } = this.props;
    const {
      code, description, name, title,
    } = example;

    // Must use CommonJS require here to dynamically require components
    const ExampleComponent = require(`../examples/${componentName}/${title}/${name}`).default;

    return (
      <Wrapper>
        <ExampleWrapper>
          {description && <Title>{description}</Title>}
          <ExampleComponent />
        </ExampleWrapper>
        <CodeButton onClick={this.toggleCode}>
          {showCode ? 'Hide ' : 'Show '}
          Code
        </CodeButton>
        {showCode && <CodeExample>{code}</CodeExample>}
      </Wrapper>
    );
  }
}

Example.propTypes = {
  example: PropTypes.shape({
    code: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  componentName: PropTypes.string.isRequired,
};
