/* eslint-disable no-confusing-arrow */
import styled, { keyframes,css } from 'styled-components';
import { white, red } from '../style/colors';
import { borderRadius } from '../style/borders';
import { easeOutQuart } from '../style/animations';

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
  position: fixed;
  padding-top: 80px;
  box-sizing: border-box;
  width: 100%;
  z-index: 9999;
  flex-direction: column;
  top: 0px;
  left: 0px;

  animation: 200ms ${fadeIn} ${easeOutQuart};
`;

const getWidth = props => {
  if (props.width === 'wide') {
    return '730px';
  }
  if (props.width) {
    return props.customWidth;
  }
  return '512px';
};

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

export const Modal = styled.section`
  background: ${props => props.background};
  background-color: ${props => props.noBackground ? 'transparent': white};
  background-size: 100% auto;
  border-radius: ${borderRadius};
  box-shadow: ${props => props.noBackground ? 'none' : '0px 1px 4px rgba(0, 0, 0, 0.16)'} ;
  box-sizing: border-box;
  margin: 0 0 1rem;
  padding: 16px 0 16px 0;
  width: ${props => getWidth(props)};
  overflow: hidden;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 0;
  outline: none;

  animation: 300ms ${stagingAnimation} ${easeOutQuart};
`;

const IconContainerStyles = css`
  background: none;
  border: none;
  position: absolute;
  top: -4px;
  right: 47px;
  cursor: pointer;

  transition: transform 0.15s ease-out;
  svg {
    fill: ${white};
    transition: fill 0.15s ease-out;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      fill: ${red};
    }
  }
`

export const IconContainer = styled.button`
  ${props => props.customStyles || IconContainerStyles}
`;

export const Footer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${props => (props.background ? 'transparent' : white)};
  padding: 0 16px;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > span,
  & > p {
    margin: 0 auto 0 0;
  }
`;
