import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';

import { AppShellStyled, Wrapper, SidebarWrapper, ContentWrapper } from './style';

/**
 * The AppShell component is a general purpose wrapper for all of our applications.
 */
const AppShell = ({ user, sidebar, content }) => (
  <AppShellStyled>
    <NavBar user={user} />
    <Wrapper>
      <SidebarWrapper>
        {sidebar}
      </SidebarWrapper>
      <ContentWrapper>
        {content}
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
  sidebar: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default AppShell;
