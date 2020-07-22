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
  label: PropTypes.string.isRequired,
  isOn: PropTypes.bool,
  id: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleSwitch: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  disabled: false,
  isOn: false,
};

export default Switch;
