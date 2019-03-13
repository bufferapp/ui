import styled from 'styled-components';
import Cross from '../Icon/Icons/Cross';

export const Container = styled.div`
  background: #3d3d3d;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  position: absolute;
  width: 327px;
  right: 15px;
  top: 15px;
  color: #ffffff;
  padding: 16px;
  z-index: 999999;
`;

export const Text = styled.div`
  font-family: Roboto,serif;
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
  opacity: 0.7;
  cursor: pointer;
`;
