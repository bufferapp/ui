import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Text,
  Icon,
  TextRow,
  ButtonsRow,
  ButtonStyled,
} from './style';

const Notification = ({
  text,
  onClose,
  type,
  onLeftAction,
  leftLabel,
  onRightAction,
  rightLabel,
}) => (
  <Container>
    <TextRow>
      <Text>{text}</Text>
      <Icon onClick={onClose} />
    </TextRow>
    {type === 'action' && (
      <ButtonsRow>
        {leftLabel && (
          <ButtonStyled onClick={onLeftAction} label={leftLabel} type="text" />
        )}
        {rightLabel && (
          <ButtonStyled
            onClick={onRightAction}
            label={rightLabel}
            type="text"
          />
        )}
      </ButtonsRow>
    )}
  </Container>
);

Notification.propTypes = {
  /** Text of the notification */
  text: PropTypes.string.isRequired,

  /** Callback function to execute when the notification closes */
  onClose: PropTypes.func.isRequired,

  /** Type of the notification */
  type: PropTypes.oneOf(['action', 'text']),

  /** Function to call when the left button is pressed */
  onLeftAction: PropTypes.func,

  /** Left button label */
  leftLabel: PropTypes.string,

  /** Function to call when the right button is pressed */
  onRightAction: PropTypes.func,

  /** Right button label */
  rightLabel: PropTypes.string,
};

Notification.defaultProps = {
  type: 'text',
  onLeftAction: undefined,
  leftLabel: undefined,
  onRightAction: undefined,
  rightLabel: undefined,
};

export default Notification;
