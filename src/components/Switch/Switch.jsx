import React from 'react';
import PropTypes from 'prop-types';
import { Input, Span, Wrapper, Container } from './style';
import Text from '../Text/Text';

const Switch = ({ label, id, disabled, handleSwitch, isOn }) => (
  <Container>
    <Text htmlFor={id} type="label">
      {label}
    </Text>
    <Wrapper>
      <Input
        checked={isOn}
        onChange={handleSwitch}
        id={id}
        type="checkbox"
        role="switch"
        aria-checked={isOn}
        aria-readonly={disabled}
        disabled={disabled}
      />
      <Span aria-hidden="true" />
    </Wrapper>
  </Container>
);
  
Switch.propTypes = {
  /** It adds a label to the left of the switch. */
  label: PropTypes.string.isRequired,
  /** The value for whether the switch is on or off */
  isOn: PropTypes.bool,
  /** The id for the label and input */
  id: PropTypes.bool.isRequired,
  /** It removes pointer and changes it to readonly */
  disabled: PropTypes.bool,
  /** It changes the checked value of the switch */
  handleSwitch: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  disabled: false,
  isOn: false,
};

export default Switch;
