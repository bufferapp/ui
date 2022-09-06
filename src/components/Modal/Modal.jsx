import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';
import Button from '../Button';
import  Cross  from '../Icons/Cross';

function setCookie(cookie, cookieKey, days, value) {
  const expiresInDays = days * 24 * 60 * 60;
  document.cookie = `${cookieKey}=${value}; max-age=${expiresInDays}; ${cookie}`;
}

export function hasDismissedCookie(cookie, cookieKey) {
  const match = cookie.match(new RegExp(`${cookieKey}=dismissed;*`));
  if (match) {
    return true;
  }
  return false;
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    if (props.cookie) {
      this.state = {
        dismissed: hasDismissedCookie(props.cookie.store, props.cookie.store),
      };
    }
  }

  componentDidMount() {
    if (this.ctaButton) {
      this.ctaButton.focus();
    }
    if (this.modal) {
      this.modal.addEventListener('keydown', this.onKeyDown);
      this.modal.focus();
      if (this.props.closeButton) {
        this.container.addEventListener('click', e => this.clickToClose(e));
      }
    }
  }

  componentWillUnmount() {
    if (this.modal) {
      this.modal.removeEventListener('keydown', this.onKeyDown);
    }
  }

  onKeyDown = event => {
    // ESC
    if (event.which === 27) {
      event.preventDefault();
      event.stopPropagation();
      if (this.props.closeButton) {
        this.props.closeButton.callback();
      }
      this.dismiss();
    }
  };

  validateAction = action => {
    if (action && action.label && action.callback) {
      return true;
    }
    return false;
  };

  handleAction(action) {
    if (action.callback) {
      action.callback();
    }
    if (this.props.dismissible) {
      this.dismiss();
    }
  }

  clickToClose(e) {
    if (e.target !== this.container) return;
    this.props.closeButton.callback();
    this.dismiss();
  }

  /** this must be invoked to properly dismiss the modal */
  dismiss() {
    const { cookie } = this.props;
    this.setState({ dismissed: true });
    if (cookie) {
      setCookie(cookie.store, cookie.key, cookie.days, 'dismissed');
    }
    if (this.props.previousFocus && this.props.previousFocus.current) {
      this.props.previousFocus.current.focus();
    }
  }

  render() {
    const {
      children,
      background,
      action,
      secondaryAction,
      footer,
      width,
      noBackground,
      closeButton,
    } = this.props;

    if (this.state && this.state.dismissed) {
      return null;
    }

    return (
      <Styles.Container ref={container => (this.container = container)}>
        <Styles.Modal
          background={background}
          ref={modal => (this.modal = modal)}
          width={width}
          tabIndex="0" // this needs to have a tabIndex so that it can listen for the ESC key
          noBackground={noBackground}
        >
          {closeButton && (
            <Styles.IconContainer
              onClick={() => {
                this.handleAction(closeButton);
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
              <Button
                type="text"
                onClick={() => {
                  this.handleAction(secondaryAction);
                }}
                disabled={secondaryAction.disabled}
                label={secondaryAction.label}
              />
            )}
            {this.validateAction(action) && (
              <Button
                ref={ctaButton => (this.ctaButton = ctaButton)}
                type={action.type || "primary"}
                onClick={() => {
                  this.handleAction(action);
                }}
                disabled={action.disabled}
                label={action.label}
              />
            )}
          </Styles.Footer>
        </Styles.Modal>
      </Styles.Container>
    );
  }
}

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
};

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
};

export default Modal;
