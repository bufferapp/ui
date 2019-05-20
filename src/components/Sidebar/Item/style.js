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
`;
