import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Cross } from '../Icon';
import { Container, Modal, CloseButton } from './style';
import { useAnimation } from '../AnimationWrapper';
import { stageInCenter, stageOutCenter } from '../style/animations';
const ESCAPE_KEY = 27;
const TAB_KEY = 9;
const SimpleModal = ({ children, closeAction }) => {
    const modalRef = useRef(null);
    const containerRef = useRef(null);
    const { AnimationWrapper, dismiss: dismissAnimationWrapper, animationProps, } = useAnimation({
        stageInAnimation: stageInCenter,
        stageOutAnimation: stageOutCenter,
        duration: 400,
        onDismiss: closeAction,
    });
    const handleTabKey = (e) => {
        const focusableModalElements = modalRef.current.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, div[tabIndex="0"]');
        const firstElement = focusableModalElements[0];
        const lastElement = focusableModalElements[focusableModalElements.length - 1];
        if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            return e.preventDefault();
        }
        if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    };
    const keyListenersMap = new Map([
        [ESCAPE_KEY, dismissAnimationWrapper],
        [TAB_KEY, handleTabKey],
    ]);
    const clickToClose = (e) => {
        if (e.target !== containerRef.current)
            return;
        dismissAnimationWrapper();
    };
    useEffect(() => {
        function keyListener(e) {
            const listener = keyListenersMap.get(e.keyCode);
            return listener && listener(e);
        }
        document.addEventListener('keydown', keyListener);
        modalRef.current.focus();
        containerRef.current.addEventListener('click', (e) => clickToClose(e));
        return () => document.removeEventListener('keydown', keyListener);
    }, []);
    return (React.createElement(Container, { ref: containerRef, role: "dialog", "aria-modal": "true" },
        React.createElement(AnimationWrapper, Object.assign({}, animationProps),
            React.createElement(Modal, { ref: modalRef, tabIndex: "0" },
                React.createElement(CloseButton, { onClick: () => dismissAnimationWrapper() },
                    React.createElement(Cross, null)),
                children))));
};
SimpleModal.propTypes = {
    children: PropTypes.node.isRequired,
    closeAction: PropTypes.func.isRequired,
};
export default SimpleModal;
//# sourceMappingURL=SimpleModal.js.map