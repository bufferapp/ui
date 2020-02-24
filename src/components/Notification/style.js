import styled from 'styled-components';
import Cross from '../Icon/Icons/Cross';
import Button from '../Button/Button';
import { white, grayLight, grayDarker, grayDark } from '../style/colors';

export const Container = styled.div`
  background: ${grayDarker};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  position: absolute;
  width: 327px;
  right: 15px;
  top: 15px;
  color: ${white};
  z-index: 999999;
  transition-duration: 0.35s;
  transition-property: opacity, top;
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  display: flex;
  flex-direction: column;
`;

export const TextRow = styled.div`
  padding: 16px;
`;

export const ButtonsRow = styled.div`
  background: ${grayDark};
  padding-right: 10px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonStyled = styled(Button)`
  color: ${grayLight};
  :focus {
    box-shadow: none;
  }
  :hover {
    color: ${white};
  }
`;

export const Text = styled.div`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  font-size: 14px;
  margin-right: 20px;
`;

export const Icon = styled(Cross)`
  position: absolute;
  font-size: 16px;
  top: 18px;
  right: 19px;
  cursor: pointer;
  color: ${grayLight};
  :hover {
    color: ${white};
  }
`;
