import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
// import GlobalStyles from '../GlobalStyles';

import {
  AppShellStyled,
  Wrapper,
  SidebarWrapper,
  ContentWrapper,
} from './style';

/**
 * The AppShell component is a general purpose wrapper for all of our applications.
 */
const AppShell = ({ user, helpMenuItems, sidebar, content }) => (
  <AppShellStyled>
    {/* <GlobalStyles /> */}
    <NavBar user={user} helpMenuItems={helpMenuItems} />
    <Wrapper>
      {sidebar && <SidebarWrapper>{sidebar}</SidebarWrapper>}
      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  </AppShellStyled>
);

AppShell.propTypes = {
  /** See the prop description in the `NavBar` component. */
  user: NavBar.propTypes.user, // eslint-disable-line

  /** See the prop description in the `NavBar` component. */
  helpMenuItems: NavBar.propTypes.helpMenuItems, // eslint-disable-line

  /** (Optional) Your sidebar component. */
  sidebar: PropTypes.node,

  /** (Optional) Your content component. */
  content: PropTypes.node.isRequired,
};

AppShell.defaultProps = {
  sidebar: null,
}

export default AppShell;
