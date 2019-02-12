import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Example from './components/Example';
import Props from './components/Props';
import Heading from './components/Heading';

const Wrapper = styled.div`
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

const Container = styled.div`
    flex: 1 1 auto;
    min-width: 0px;
    display: flex;
    position: relative;
`;

const Body = styled.div`
    display: block;
    padding: 0px;
    flex: 1 1 auto;
`;


const Description = styled.p`
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
`;

const PropTitle = styled.h3`
    margin-top: 50px;
    font-size: 24px;
`;

const ExampleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: end;
`;

const ComponentExample = ({
  fullscreen, name, folder, id,
}) => (
  <Fragment>
    {!fullscreen && (
      <h4 key="heading">
        {folder[0] ? `${name} ${folder[0].title}s` : ''}
      </h4>)}
    <ExampleWrapper key="example">
      {folder[0]
        // if this component example contains subfolders, then get example from each subfolder
        ? folder.map((example, idx) => <Example key={name + idx} example={example} componentName={name} id={id} />)
        // otherwise just render the example
        : <Example example={folder} componentName={name} id={id} key={name} fullscreen={fullscreen} />
      }
    </ExampleWrapper>
  </Fragment>
);

/** Page to display the shared component info taken from .jsx components */
const Component = ({ component, fullscreen }) => {
  const {
    name, description, props, examples, id,
  } = component;
  if (fullscreen) {
    return examples.map((folder, idx) => (
      <ComponentExample
        fullscreen
        folder={folder}
        name={name}
        id={id}
        key={idx}
      />));
  }
  return (
    <Wrapper>
      <Container>
        <Body>
          <Heading text={name} />
          <Description>{description}</Description>
          <PropTitle>
            Example
            {examples.length > 1 && 's'}
          </PropTitle>
          {examples.map((folder, idx) => <ComponentExample folder={folder} name={name} id={id} key={idx} />)}
          <PropTitle>Props</PropTitle>
          {
          props ? <Props props={props} />
            : 'This component accepts no props.'
        }
        </Body>
      </Container>
    </Wrapper>
  );
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
  /** Whether to show only the component (view: fullscreen) */
  fullscreen: PropTypes.bool,

  /** Component to display */
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
