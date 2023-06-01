import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';
import Button from '../Button';
import { Cross } from '../Icon';
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
        this.onKeyDown = (event) => {
            if (event.which === 27) {
                event.preventDefault();
                event.stopPropagation();
                if (this.props.closeButton) {
                    this.props.closeButton.callback();
                }
                this.dismiss();
            }
        };
        this.validateAction = (action) => {
            if (action && action.label && action.callback) {
                return true;
            }
            return false;
        };
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
                this.container.addEventListener('click', (e) => this.clickToClose(e));
            }
        }
    }
    componentWillUnmount() {
        if (this.modal) {
            this.modal.removeEventListener('keydown', this.onKeyDown);
        }
    }
    handleAction(action) {
        if (action.callback) {
            action.callback();
        }
        if (this.props.dismissible) {
            this.dismiss();
        }
    }
    clickToClose(e) {
        if (e.target !== this.container)
            return;
        this.props.closeButton.callback();
        this.dismiss();
    }
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
        const { children, background, action, secondaryAction, footer, width, noBackground, closeButton, } = this.props;
        if (this.state && this.state.dismissed) {
            return null;
        }
        return (React.createElement(Styles.Container, { ref: (container) => (this.container = container) },
            React.createElement(Styles.Modal, { background: background, ref: (modal) => (this.modal = modal), width: width, tabIndex: "0", noBackground: noBackground },
                closeButton && (React.createElement(Styles.IconContainer, { onClick: () => {
                        this.handleAction(closeButton);
                    }, noBackground: noBackground },
                    React.createElement(Cross, { size: "large" }))),
                children,
                React.createElement(Styles.Footer, { background: background },
                    footer,
                    this.validateAction(secondaryAction) && (React.createElement(Button, { type: "text", onClick: () => {
                            this.handleAction(secondaryAction);
                        }, disabled: secondaryAction.disabled, label: secondaryAction.label })),
                    this.validateAction(action) && (React.createElement(Button, { ref: (ctaButton) => (this.ctaButton = ctaButton), type: action.type || 'primary', onClick: () => {
                            this.handleAction(action);
                        }, disabled: action.disabled, label: action.label }))))));
    }
}
Modal.propTypes = {
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
    action: PropTypes.shape({
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        callback: PropTypes.func,
        type: PropTypes.string,
    }),
    dismissible: PropTypes.bool,
    secondaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        callback: PropTypes.func,
    }),
    cookie: PropTypes.shape({
        days: PropTypes.number,
        store: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    }),
    footer: PropTypes.node,
    previousFocus: PropTypes.node,
    width: PropTypes.string,
    noBackground: PropTypes.bool,
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
//# sourceMappingURL=Modal.js.map