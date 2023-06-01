import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Example from './components/Example';
import Props from './components/Props';
import Heading from './components/Heading';
const Wrapper = styled.div `
  margin: 0px;
  padding: 0px;
  flex: 1 1 auto;
  min-width: 0px;
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 100%;
  padding-bottom: 64px;
`;
const Container = styled.div `
  flex: 1 1 auto;
  min-width: 0px;
  display: flex;
  position: relative;
`;
const Body = styled.div `
  display: block;
  padding: 0px;
  flex: 1 1 auto;
`;
const Description = styled.p `
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
`;
const PropTitle = styled.h3 `
  margin-top: 50px;
  font-size: 24px;
`;
const ExampleWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: end;
`;
const IconComponentWrapper = styled.div `
  ${(props) => props.isIcon &&
    css `
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
`;
const ComponentExample = ({ fullscreen, name, folder, id }) => (React.createElement(Fragment, null,
    !fullscreen && folder[0] && (React.createElement("h4", { key: "heading" }, `${name} ${folder[0].title}s`)),
    React.createElement(ExampleWrapper, { key: "example" }, folder[0] ? (folder.map((example, idx) => (React.createElement(Example, { key: name + idx, example: example, componentName: name, id: id })))) : (React.createElement(Example, { example: folder, componentName: name, id: id, key: name, fullscreen: fullscreen, merp: "merp" })))));
const Component = ({ component, fullscreen }) => {
    const { name, description, props, examples, id } = component;
    if (fullscreen) {
        return examples.map((folder, idx) => (React.createElement(ComponentExample, { fullscreen: true, folder: folder, name: name, id: id, key: idx })));
    }
    return (React.createElement(Wrapper, null,
        React.createElement(Container, null,
            React.createElement(Body, null,
                React.createElement(Heading, { text: name }),
                React.createElement(Description, null, description),
                examples.length > 0 && (React.createElement(PropTitle, null,
                    "Example",
                    examples.length > 1 && 's')),
                React.createElement(IconComponentWrapper, { isIcon: name === 'Icon' }, examples.map((folder, idx) => (React.createElement(ComponentExample, { folder: folder, name: name, id: id, key: idx })))),
                React.createElement(PropTitle, null, "Props"),
                props ? React.createElement(Props, { props: props }) : 'This component accepts no props.'))));
};
ComponentExample.propTypes = {
    fullscreen: PropTypes.bool,
    name: PropTypes.string.isRequired,
    folder: PropTypes.shape({
        code: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
};
ComponentExample.defaultProps = {
    fullscreen: false,
};
Component.propTypes = {
    fullscreen: PropTypes.bool,
    component: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
    }).isRequired,
};
Component.defaultProps = {
    fullscreen: false,
};
export default Component;
//# sourceMappingURL=Component.js.map