import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from './style'
import Button from '../Button'
import { Cross } from '../Icon'

// @ts-expect-error TS(7006) FIXME: Parameter 'cookie' implicitly has an 'any' type.
function setCookie(cookie, cookieKey, days, value) {
  const expiresInDays = days * 24 * 60 * 60
  document.cookie = `${cookieKey}=${value}; max-age=${expiresInDays}; ${cookie}`
}

// @ts-expect-error TS(7006) FIXME: Parameter 'cookie' implicitly has an 'any' type.
export function hasDismissedCookie(cookie, cookieKey) {
  const match = cookie.match(new RegExp(`${cookieKey}=dismissed;*`))
  if (match) {
    return true
  }
  return false
}

class Modal extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)
    if (props.cookie) {
      this.state = {
        dismissed: hasDismissedCookie(props.cookie.store, props.cookie.store),
      }
    }
  }

  componentDidMount() {
    // @ts-expect-error TS(2339) FIXME: Property 'ctaButton' does not exist on type 'Modal... Remove this comment to see the full error message
    if (this.ctaButton) {
      // @ts-expect-error TS(2339) FIXME: Property 'ctaButton' does not exist on type 'Modal... Remove this comment to see the full error message
      this.ctaButton.focus()
    }
    // @ts-expect-error TS(2339) FIXME: Property 'modal' does not exist on type 'Modal'.
    if (this.modal) {
      // @ts-expect-error TS(2339) FIXME: Property 'modal' does not exist on type 'Modal'.
      this.modal.addEventListener('keydown', this.onKeyDown)
      // @ts-expect-error TS(2339) FIXME: Property 'modal' does not exist on type 'Modal'.
      this.modal.focus()
      // @ts-expect-error TS(2339) FIXME: Property 'closeButton' does not exist on type 'Rea... Remove this comment to see the full error message
      if (this.props.closeButton) {
        // @ts-expect-error TS(2339) FIXME: Property 'container' does not exist on type 'Modal... Remove this comment to see the full error message
        this.container.addEventListener('click', (e) => this.clickToClose(e))
      }
    }
  }

  componentWillUnmount() {
    // @ts-expect-error TS(2339) FIXME: Property 'modal' does not exist on type 'Modal'.
    if (this.modal) {
      // @ts-expect-error TS(2339) FIXME: Property 'modal' does not exist on type 'Modal'.
      this.modal.removeEventListener('keydown', this.onKeyDown)
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  onKeyDown = (event) => {
    // ESC
    if (event.which === 27) {
      event.preventDefault()
      event.stopPropagation()
      // @ts-expect-error TS(2339) FIXME: Property 'closeButton' does not exist on type 'Rea... Remove this comment to see the full error message
      if (this.props.closeButton) {
        // @ts-expect-error TS(2339) FIXME: Property 'closeButton' does not exist on type 'Rea... Remove this comment to see the full error message
        this.props.closeButton.callback()
      }
      this.dismiss()
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'action' implicitly has an 'any' type.
  validateAction = (action) => {
    if (action && action.label && action.callback) {
      return true
    }
    return false
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'action' implicitly has an 'any' type.
  handleAction(action) {
    if (action.callback) {
      action.callback()
    }
    // @ts-expect-error TS(2339) FIXME: Property 'dismissible' does not exist on type 'Rea... Remove this comment to see the full error message
    if (this.props.dismissible) {
      this.dismiss()
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  clickToClose(e) {
    // @ts-expect-error TS(2339) FIXME: Property 'container' does not exist on type 'Modal... Remove this comment to see the full error message
    if (e.target !== this.container) return
    // @ts-expect-error TS(2339) FIXME: Property 'closeButton' does not exist on type 'Rea... Remove this comment to see the full error message
    this.props.closeButton.callback()
    this.dismiss()
  }

  /** this must be invoked to properly dismiss the modal */
  dismiss() {
    // @ts-expect-error TS(2339) FIXME: Property 'cookie' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { cookie } = this.props
    this.setState({ dismissed: true })
    if (cookie) {
      setCookie(cookie.store, cookie.key, cookie.days, 'dismissed')
    }
    // @ts-expect-error TS(2339) FIXME: Property 'previousFocus' does not exist on type 'R... Remove this comment to see the full error message
    if (this.props.previousFocus && this.props.previousFocus.current) {
      // @ts-expect-error TS(2339) FIXME: Property 'previousFocus' does not exist on type 'R... Remove this comment to see the full error message
      this.props.previousFocus.current.focus()
    }
  }

  render() {
    const {
      children,
      // @ts-expect-error TS(2339) FIXME: Property 'background' does not exist on type 'Read... Remove this comment to see the full error message
      background,
      // @ts-expect-error TS(2339) FIXME: Property 'action' does not exist on type 'Readonly... Remove this comment to see the full error message
      action,
      // @ts-expect-error TS(2339) FIXME: Property 'secondaryAction' does not exist on type ... Remove this comment to see the full error message
      secondaryAction,
      // @ts-expect-error TS(2339) FIXME: Property 'footer' does not exist on type 'Readonly... Remove this comment to see the full error message
      footer,
      // @ts-expect-error TS(2339) FIXME: Property 'width' does not exist on type 'Readonly<... Remove this comment to see the full error message
      width,
      // @ts-expect-error TS(2339) FIXME: Property 'noBackground' does not exist on type 'Re... Remove this comment to see the full error message
      noBackground,
      // @ts-expect-error TS(2339) FIXME: Property 'closeButton' does not exist on type 'Rea... Remove this comment to see the full error message
      closeButton,
    } = this.props

    // @ts-expect-error TS(2339) FIXME: Property 'dismissed' does not exist on type 'Reado... Remove this comment to see the full error message
    if (this.state && this.state.dismissed) {
      return null
    }

    return (
      // @ts-expect-error TS(7006) FIXME: Parameter 'container' implicitly has an 'any' type... Remove this comment to see the full error message
      <Styles.Container ref={(container) => (this.container = container)}>
        <Styles.Modal
          background={background}
          // @ts-expect-error TS(7006) FIXME: Parameter 'modal' implicitly has an 'any' type.
          ref={(modal) => (this.modal = modal)}
          width={width}
          tabIndex="0" // this needs to have a tabIndex so that it can listen for the ESC key
          noBackground={noBackground}
        >
          {closeButton && (
            <Styles.IconContainer
              onClick={() => {
                this.handleAction(closeButton)
              }}
              noBackground={noBackground}
            >
              <Cross size="large" />
            </Styles.IconContainer>
          )}
          {children}
          <Styles.Footer background={background}>
            {footer}
            {this.validateAction(secondaryAction) && (
              // @ts-expect-error TS(2740) FIXME: Type '{ type: string; onClick: () => void; disable... Remove this comment to see the full error message
              <Button
                type="text"
                onClick={() => {
                  this.handleAction(secondaryAction)
                }}
                disabled={secondaryAction.disabled}
                label={secondaryAction.label}
              />
            )}
            {this.validateAction(action) && (
              // @ts-expect-error TS(2740) FIXME: Type '{ ref: (ctaButton: any) => any; type: any; o... Remove this comment to see the full error message
              <Button
                // @ts-expect-error TS(7006) FIXME: Parameter 'ctaButton' implicitly has an 'any' type... Remove this comment to see the full error message
                ref={(ctaButton) => (this.ctaButton = ctaButton)}
                type={action.type || 'primary'}
                onClick={() => {
                  this.handleAction(action)
                }}
                disabled={action.disabled}
                label={action.label}
              />
            )}
          </Styles.Footer>
        </Styles.Modal>
      </Styles.Container>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Modal.propTypes = {
  /** The style attribute to apply a background to the modal */
  background: PropTypes.string,
  /** The content of the modal */
  children: PropTypes.node.isRequired,
  /** The main action settings {**label**: the label of the button,  **disabled** to disable the button, **callback** a callback to invoke on action click, before dismiss, **type** to set the action button type (danger, primary)} */
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    callback: PropTypes.func,
    type: PropTypes.string,
  }),
  /** Verifies if the modal should be dismissed right after the action is executed, in case we are doing a validation inside the modal before closing it */
  dismissible: PropTypes.bool,
  /** The secondary action settings {**label**: the label of the button, **disabled** to disable the button, **callback** a callback to invoke on action click, before dismiss */
  secondaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    callback: PropTypes.func,
  }),
  /** The cookie settings if it's omitted the modal won't use cookies {**days**: expire time of the cookie in days, **store**, usually document.cookie, **key**: the key of the cookie} */
  cookie: PropTypes.shape({
    days: PropTypes.number,
    store: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }),
  footer: PropTypes.node,
  /** this element will regain focus on modal close */
  previousFocus: PropTypes.node,
  /** set a custom modal width, accepts 'wide' as a preset for 730px */
  width: PropTypes.string,
  /** remove the background so only the content shows */
  noBackground: PropTypes.bool,
  /** adds a close icon, the function to close remains in your app */
  closeButton: PropTypes.shape({
    callback: PropTypes.func.isRequired,
  }),
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Modal.defaultProps = {
  background: null,
  cookie: null,
  action: null,
  secondaryAction: null,
  footer: null,
  previousFocus: null,
  dismissible: true,
  width: null,
  noBackground: false,
  closeButton: null,
}

export default Modal
