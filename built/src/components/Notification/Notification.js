import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Icon, TextRow, ButtonsRow, ButtonStyled, } from './style';
import { useAnimation } from '../AnimationWrapper';
import { stageInTop, fadeOut } from '../style/animations';
function Notification({ text, onClose, type, action, secondaryAction }) {
    const { AnimationWrapper, dismiss: dismissAnimationWrapper, animationProps, } = useAnimation({
        justify: 'flex-end',
        stageInAnimation: stageInTop,
        stageOutAnimation: fadeOut,
        onDismiss: onClose,
    });
    return (React.createElement(AnimationWrapper, Object.assign({}, animationProps),
        React.createElement(Container, null,
            React.createElement(TextRow, null,
                React.createElement(Text, null, text),
                React.createElement(Icon, { onClick: () => dismissAnimationWrapper() })),
            type === 'action' && (React.createElement(ButtonsRow, null,
                action && (React.createElement(ButtonStyled, { onClick: action.callback, label: action.label, type: "text" })),
                secondaryAction && (React.createElement(ButtonStyled, { onClick: secondaryAction.callback, label: secondaryAction.label, type: "text" })))))));
}
Notification.propTypes = {
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['action', 'text']),
    action: PropTypes.shape({
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        callback: PropTypes.func,
    }),
    secondaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        callback: PropTypes.func,
    }),
};
Notification.defaultProps = {
    type: 'text',
    action: undefined,
    secondaryAction: undefined,
};
export default Notification;
//# sourceMappingURL=Notification.js.map