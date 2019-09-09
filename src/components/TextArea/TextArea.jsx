import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import {HelpTextWrapper, HelpText} from '../Input/style';
import { Warning } from '../Icon';
import {red, redLight, gray, white, blue, grayLight, grayDarker} from '../style/colors';
import { fontFamily, fontSize, fontWeight, lineHeight } from '../style/fonts';

// import * as Styles from './style';

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

const StyledTextArea = styled.textarea`
  border-radius: 4px;
  box-shadow: 2px 2px 0 2px transparent;
  transition-property: border-width, border-color, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  background-color: ${backgroundCss}; 
  border: ${borderCss};
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : '')};
  padding: 8px;
  color: ${({ hasError }) => (hasError ? red : grayDarker)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  :focus {
    border: 1px solid ${({ hasError }) => (hasError ? red : blue)};
    box-shadow: 0px 0px 0px 3px
      ${({ hasError }) => (hasError ? '#F3AFB9' : '#ABB7FF')};
    outline: none;
    transition-property: border-width, border-color, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const TextArea = ({value, label, hasError, help, disabled, rows, onChange, ...props }) => (
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
        rows={rows > 20 ? '20' : rows}
        value={value}
        onChange={onChange}
      />
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
  /** It adds a label on top of the textarea box. */
  label: PropTypes.string.isRequired,
  /** It's the placeholder value of the textarea. */
  placeholder: PropTypes.string,
  /** It colors the field in red. */
  hasError: PropTypes.bool,
  /** It disables the textarea field. */
  disabled: PropTypes.bool,
  /** The onChange event */
  onChange: PropTypes.func.isRequired,
  /** Number of rows, max 20 */
  rows: PropTypes.number
};

TextArea.defaultProps = {
  placeholder: undefined,
  hasError: false,
  disabled: false,
  rows: 4
}

export default TextArea;
