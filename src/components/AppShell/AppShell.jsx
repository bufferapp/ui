import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '../NavBar';

const AppShellStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
  flex: 1;
`;

const SidebarWrapper = styled.div`
  width: 224px;
  margin: 0 8px 16px 16px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin: 0 16px 16px 8px;
`;

const AppShell = ({ user, sidebar: SidebarComponent, content: ContentComponent }) => (
  <AppShellStyled>
    <NavBar user={user} />
    <Wrapper>
      <SidebarWrapper>
        <SidebarComponent />
      </SidebarWrapper>
      <ContentWrapper>
        <ContentComponent />
      </ContentWrapper>
    </Wrapper>
  </AppShellStyled>
);

AppShell.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      component: PropTypes.node,
      hasDivider: PropTypes.bool,
      onItemClick: PropTypes.func,
    })).isRequired,
  }).isRequired,
  sidebar: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

export default AppShell;
