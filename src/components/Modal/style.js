/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { white } from '../style/colors';
import { borderRadius } from '../style/borders';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
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
`;

const getWidth = props => {
  if (props.wide || props.width === 'wide') {
    return '730px';
  }
  if (props.width) {
    return props.customWidth;
  }
  return '512px';
};

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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 0;
  outline: none;
`;

export const IconContainer = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 80px;
  right: 230px;
  svg {
    fill: #fff;
  }
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
