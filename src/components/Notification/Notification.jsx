import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text, Icon} from './style';

const Notification = ({ text, onClose }) => (
  <Container>
    <Text>{text}</Text>
    <Icon onClick={onClose} />
  </Container>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Notification;
