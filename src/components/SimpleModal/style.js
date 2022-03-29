import styled, { keyframes } from 'styled-components';
import { easeOutQuart } from '../style/animations';
import { white, red } from '../style/colors';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: ${({alwaysOnTop}) => alwaysOnTop? '9999' : '1' };
  flex-direction: column;
  top: 0px;
  left: 0px;

  animation: 200ms ${fadeIn} ${easeOutQuart};
`;

export const Modal = styled.div`
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
`;

export const CloseButton = styled.button`
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


