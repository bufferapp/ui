import styled, { css } from 'styled-components';

export const flex = css`
  display: flex;
`;

export const flexColumn = css`
  flex-direction: column;
`;

export const flexRow = css`
  flex-direction: row;
`;

/**
 *
 */

export const AppShellStyled = styled.div`
  ${flex}
  ${flexColumn}
  min-height: 100%;
`;

export const Wrapper = styled.div`
  ${flex}
  ${flexRow}
  flex: 1;
`;

export const SidebarWrapper = styled.div`
  ${flex}
  ${flexColumn}
  width: 270px;
`;

export const ContentWrapper = styled.div`
  ${flex}
  ${flexColumn}
  align-items: center;
  height: 100%;
  flex: 1;
`;
