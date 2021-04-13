import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Cross } from '../Icon';
import { white, red } from '../style/colors';
import { easeOutQuart } from '../style/animations';

const ESCAPE_KEY = 27;
const TAB_KEY = 9;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const stagingAnimation = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: 9999;
  flex-direction: column;
  top: 0px;
  left: 0px;

  animation: 200ms ${fadeIn} ${easeOutQuart};
`;

const Modal = styled.div`
  background-color: ${white};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  margin: 0 0 1rem;
  width: fit-content;
  overflow: hidden;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  animation: 300ms ${stagingAnimation} ${easeOutQuart};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  transition: transform 0.15s ease-out;
  svg {
    transition: fill 0.15s ease-out;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      fill: ${red};
    }
  }
`;

const SimpleModal = ({ children, closeAction }) => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);

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
    [ESCAPE_KEY, () => closeAction()],
    [TAB_KEY, handleTabKey],
  ]);

  const clickToClose = e => {
    if (e.target !== containerRef.current) return;
    closeAction();
  };

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);
    containerRef.current.addEventListener('click', e => clickToClose(e));

    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  return (
    <Container ref={containerRef} role="dialog" aria-modal="true">
      <Modal
        ref={modalRef}
        tabIndex="0" // this needs to have a tabIndex so that it can listen for the ESC key
      >
        <CloseButton
          onClick={() => {
            closeAction();
          }}
        >
          <Cross />
        </CloseButton>
        {children}
      </Modal>
    </Container>
  );
};

SimpleModal.propTypes = {
  children: PropTypes.node.isRequired,
  closeAction: PropTypes.func.isRequired,
};

export default SimpleModal;
