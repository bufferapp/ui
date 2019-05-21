import styled from 'styled-components';

export const ItemStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
  height: 32px;
  border-radius: 4px;
  padding-left: 8px;
  margin-top: 32px;
`;

export const Badge = styled.span`
  margin-left: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #3d3d3d;
  margin-right: 8px;
`;

export const NameHandleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const Handle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.2px;

  color: #636363;
`;
