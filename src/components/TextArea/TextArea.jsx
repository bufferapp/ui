import React from 'react';

import PropTypes from 'prop-types';

import Text from '../Text';
import {HelpTextWrapper, HelpText} from '../Input/style';
import { Warning } from '../Icon';
import {Container, StyledLabel, StyledTextArea} from './style';

const TextArea = ({value, label, hasError, help, disabled, rows, onChange, id, ...props }) => (
  <Container>
    <StyledLabel htmlFor={id}>
      <Text
        htmlFor={id}
        type='label'
      >
        {label}
      </Text>
      <StyledTextArea
        id={id}
        {...props}
        hasError={hasError}
        disabled={disabled}
        rows={rows > 20 ? 20 : rows}
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
    {hasError && (
      <HelpTextWrapper>
        <Warning size="medium" />
        <HelpText type="help" htmlFor={id} hasError={hasError}>
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
  rows: PropTypes.number,
  /** The id to link the textarea with the label */
  id: PropTypes.string.isRequired
};

TextArea.defaultProps = {
  placeholder: undefined,
  hasError: false,
  disabled: false,
  rows: 4
}

export default TextArea;
