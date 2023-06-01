import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Text,
  Icon,
  TextRow,
  ButtonsRow,
  ButtonStyled,
} from './style'
import { useAnimation } from '../AnimationWrapper'
import { stageInTop, fadeOut } from '../style/animations'

// @ts-expect-error TS(7031) FIXME: Binding element 'text' implicitly has an 'any' typ... Remove this comment to see the full error message
function Notification({ text, onClose, type, action, secondaryAction }) {
  const {
    AnimationWrapper,
    dismiss: dismissAnimationWrapper,
    animationProps,
  } = useAnimation({
    justify: 'flex-end',
    stageInAnimation: stageInTop,
    stageOutAnimation: fadeOut,
    onDismiss: onClose,
  })

  return (
    <AnimationWrapper {...animationProps}>
      <Container>
        <TextRow>
          <Text>{text}</Text>
          <Icon onClick={() => dismissAnimationWrapper()} />
        </TextRow>
        {type === 'action' && (
          <ButtonsRow>
            {action && (
              <ButtonStyled
                onClick={action.callback}
                label={action.label}
                type="text"
              />
            )}
            {secondaryAction && (
              <ButtonStyled
                onClick={secondaryAction.callback}
                label={secondaryAction.label}
                type="text"
              />
            )}
          </ButtonsRow>
        )}
      </Container>
    </AnimationWrapper>
  )
}

Notification.propTypes = {
  /** Text of the notification */
  text: PropTypes.string.isRequired,

  /** Callback function to execute when the notification closes */
  onClose: PropTypes.func.isRequired,

  /** Type of the notification */
  type: PropTypes.oneOf(['action', 'text']),

  /** The main action settings {**label**: the label of the button,  **disabled** to disable the button, **callback** a callback to invoke on action click, before dismiss */
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    callback: PropTypes.func,
  }),
  /** The secondary action settings {**label**: the label of the button, **disabled** to disable the button, **callback** a callback to invoke on action click, before dismiss */
  secondaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    callback: PropTypes.func,
  }),
}

Notification.defaultProps = {
  type: 'text',
  action: undefined,
  secondaryAction: undefined,
}

export default Notification
