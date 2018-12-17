import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import Example from './components/Example';
import Props from './components/Props';
import Heading from './components/Heading';

const Wrapper = style.div`
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

const Container = style.div`
    flex: 1 1 auto;
    min-width: 0px;
    display: flex;
    position: relative;
`;

const Body = style.div`
    display: block;
    padding: 0px;
    flex: 1 1 auto;
`;


const Description = style.p`
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
`;

const PropTitle = style.h3`
    margin-top: 50px;
    font-size: 24px;
`;

const ExampleWrapper = style.div`
    display: flex;
    flex-wrap: wrap;
    align-items: end;
`;

const ComponentExample = ({
  name, folder, id,
}) => [
  <h4 key="heading">
    {folder[0] ? `${name} ${folder[0].title}s` : ''}
  </h4>,
  <ExampleWrapper key="example">
    {folder[0]
      // if this component example contains subfolders, then get example from each subfolder
      ? folder.map((example, idx) => <Example key={name + idx} example={example} componentName={name} id={id} />)
      // otherwise just render the example
      : <Example example={folder} componentName={name} id={id} key={name} />
    }
  </ExampleWrapper>,
];

/** Page to display the shared component info taken from .jsx components */
const Component = ({ component }) => {
  const {
    name, description, props, examples, id,
  } = component;
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

Component.propTypes = {
  /** Component to display */
  component: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};


export default Component;
