/* eslint-disable no-nested-ternary */
import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import {HelpTextWrapper, HelpText} from '../Input/style';
import { Warning } from '../Icon';
import {red, redLight, gray, white, boxShadow, grayLight} from '../style/colors'

// mport * as Styles from './style';

const Container = styled.div`
  
`;

const backgroundCss = ({disabled, hasError}) => {
  if (disabled) {
    return grayLight
  } 
  if (hasError) {
    return redLight
  }
  return white;
}

const borderCss = ({disabled, hasError}) => {
  if (disabled) {
    return 'none'
  } 
  if (hasError) {
    return `1px solid ${red}`
  }
  return `1px solid ${gray}`;
}

// ${({ disabled }) => (disabled ? 'none' : `{1px solid ${({ hasError }) => (hasError ? red : gray)}};)};

const StyledTextArea = styled.textarea`
  background-color: ${backgroundCss}; 
  border: ${borderCss};
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  color: ${({ hasError }) => (hasError ? red : '')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : '')};
  padding: 8px;
  :focus {
    border: 3px solid ${({ hasError }) => (hasError ? '#F3AFB9' : boxShadow)};
    border-radius: 4px;
    outline: none;
  }
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const TextArea = ({ children, label, hasError, help, disabled, ...props }) => (
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
        hasError={hasError}
        disabled={disabled}
      >
        {children}
      </StyledTextArea>
    </StyledLabel>
    {hasError && (
      <HelpTextWrapper>
        <Warning size="medium" />
        <HelpText type="help" htmlFor="story" hasError={hasError}>
          {help}
        </HelpText>
      </HelpTextWrapper>
    )}
  </Container>
);

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
};

TextArea.defaultProps = {
  placeholder: undefined,
  hasError: false,
  disabled: false
}


export default TextArea;
