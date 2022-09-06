import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import  Cross  from '../Icons/Cross';
import { Container, Modal, CloseButton } from './style';
import { useAnimation } from '../AnimationWrapper';
import { stageInCenter, stageOutCenter } from '../style/animations';

const ESCAPE_KEY = 27;
const TAB_KEY = 9;
const SimpleModal = ({ children, closeAction }) => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  const { AnimationWrapper, dismiss:dismissAnimationWrapper, animationProps } = useAnimation({
    stageInAnimation: stageInCenter,
    stageOutAnimation: stageOutCenter,
    duration: 400,
    onDismiss: closeAction,
  })

  const handleTabKey = e => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, div[tabIndex="0"]'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

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

  const clickToClose = e => {
    if (e.target !== containerRef.current) return;
    dismissAnimationWrapper();
  };

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);
    modalRef.current.focus()
    containerRef.current.addEventListener('click', e => clickToClose(e));

    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  return (
    <Container ref={containerRef} role="dialog" aria-modal="true">
      <AnimationWrapper {...animationProps}>
        <Modal
          ref={modalRef}
          tabIndex="0" // this needs to have a tabIndex so that it can listen for the ESC key
        >
          <CloseButton onClick={() => dismissAnimationWrapper()}>
            <Cross />
          </CloseButton>
          {children}
        </Modal>
      </AnimationWrapper>
    </Container>
  );
};

SimpleModal.propTypes = {
  children: PropTypes.node.isRequired,
  closeAction: PropTypes.func.isRequired,
};

export default SimpleModal;
