import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import {HelpTextWrapper, HelpText} from '../Input/style';
import { Warning } from '../Icon';
import {red, redLight, gray, white, boxShadow} from '../style/colors'

// mport * as Styles from './style';

const Container = styled.div`
  
`;

const StyledTextArea = styled.textarea`
  background: ${({ hasError }) => (hasError ? redLight : white)};
  border: 1px solid ${({ hasError }) => (hasError ? red : gray)};
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  color: ${({ hasError }) => (hasError ? red : '')};
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

const TextArea = ({ children, label, hasError, help, ...props }) => (
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
  hasError: PropTypes.bool
};

TextArea.defaultProps = {
  placeholder: undefined,
  hasError: false
}


export default TextArea;
