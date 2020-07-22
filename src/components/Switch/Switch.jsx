import React from 'react';
import PropTypes from 'prop-types';
import { Input, Span, Wrapper, Container } from './style';
import Text from '../Text/Text';

const Switch = ({ label = 'On', id, disabled = true, handleSwitch, isOn = false }) => (
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
        disabled
      />
      <Span aria-hidden="true" data-checked={isOn} />
    </Wrapper>
  </Container>
);
  
Switch.propTypes = {
  label: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  id: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleSwitch: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  disabled: false,
};

export default Switch;
