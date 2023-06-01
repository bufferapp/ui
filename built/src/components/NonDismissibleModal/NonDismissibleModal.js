import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Modal } from '../SimpleModal/style';
import { useAnimation } from '../AnimationWrapper';
import { stageInCenter, stageOutCenter } from '../style/animations';
const NonDismissibleModal = ({ children }) => {
    const modalRef = useRef(null);
    const { AnimationWrapper, animationProps } = useAnimation({
        stageInAnimation: stageInCenter,
        stageOutAnimation: stageOutCenter,
        duration: 400,
    });
    useEffect(() => {
        modalRef.current.focus();
    }, []);
    return (React.createElement(Container, { role: "dialog", "aria-modal": "true", NonDismissibleModal: true },
        React.createElement(AnimationWrapper, Object.assign({}, animationProps),
            React.createElement(Modal, { ref: modalRef }, children))));
};
NonDismissibleModal.propTypes = {
    children: PropTypes.node.isRequired,
};
export default NonDismissibleModal;
//# sourceMappingURL=NonDismissibleModal.js.map