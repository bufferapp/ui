import styled, { css } from 'styled-components';
import { grayLighter } from '../style/colors';

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
  background-color: ${grayLighter};
`;

export const Wrapper = styled.div`
  ${flexRow}
  flex: 1;
  overflow: auto;
`;

export const SidebarWrapper = styled.div`
  ${flexColumn}
  width: 248px;
`;

export const ContentWrapper = styled.div`
  ${flexColumn}
  align-items: center;
  flex: 1;
  overflow: auto;
`;
