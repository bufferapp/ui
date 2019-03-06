import styled, { css } from 'styled-components';

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const AppShellStyled = styled.div`
  ${flexColumn}
  height: 100vh;
  overflow: auto;
  background-color: #e5e5e5;
`;

export const Wrapper = styled.div`
  ${flexRow}
  flex: 1;
`;

export const SidebarWrapper = styled.div`
  ${flexColumn}
  width: 270px;
`;

export const ContentWrapper = styled.div`
  ${flexColumn}
  align-items: center;
  flex: 1;
`;
