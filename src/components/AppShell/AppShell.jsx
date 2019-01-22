import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '../NavBar';

const AppShellStyled = styled.div`
  /* WIP */
`;

const AppShell = ({ user, userMenuItems }) => (
  <AppShellStyled>
    <NavBar user={user} userMenuItems={userMenuItems} />
  </AppShellStyled>
);

AppShell.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    component: PropTypes.node,
    hasDivider: PropTypes.bool,
    onItemClick: PropTypes.func,
  })).isRequired,
};

export default AppShell;
