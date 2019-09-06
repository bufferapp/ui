import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text'
// mport * as Styles from './style';

const Container = styled.div`
  
`;

const StyledTextArea = styled.textarea`
  background: #FFFFFF;
  border: 1px solid #B8B8B8;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 8px;
  resize: none;
  :focus {
    border: 3px solid #ABB7FF;
border-radius: 4px;
  }
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const TextArea = ({ children, label, ...props }) => (
  <Container>
    <StyledLabel htmlFor="story">
      <Text
        htmlFor="foo"
        type='label'
      >
        {label}
      </Text>
      <StyledTextArea
        id="story"
        {...props}
      >
        {children}
      </StyledTextArea>
    </StyledLabel>
  </Container>
);

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

TextArea.defaultProps = {
  placeholder: undefined,
}


export default TextArea;
