import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import CodeExample from './CodeExample';

const Wrapper = style.div`
  margin-bottom: 20px;
  min-width: 40%;
  flex: 1;
  margin-right: 20px;
  min-height: 135px;
  max-width: 800px;
  border-top: 1px solid #f3f3f3;
`;

const CodeButton = style.a`
  color: #4c5682a6;
  padding-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: end;
  cursor: pointer;
  font-weight 500;
`;

const Title = style.div`
    font-size: 16px;
    font-weight: 600;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

/** Displays components example information */
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
    const { example, componentName, fullscreen } = this.props;
    const {
      code, description, title, name,
    } = example;
    const fileName = componentName.replace(' ', '');

    // Must use CommonJS require here to dynamically require components
    // if we have the example title, that means that the example is located in a subfolder
    // so we need to include that title/folder in our path
    const ExampleComponent = title
      ? require(`../../../../examples/${fileName}/${title}/${name}`).default
      : require(`../../../../examples/${fileName}/${name}`).default;

    if (fullscreen) {
      return <ExampleComponent />;
    }

    return (
      <Wrapper>
        <div>
          {description && <Title>{description}</Title>}
          <ExampleComponent />
        </div>
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
  fullscreen: PropTypes.bool,
  example: PropTypes.shape({
    code: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  componentName: PropTypes.string.isRequired,
};

Example.defaultProps = {
  fullscreen: false,
};
