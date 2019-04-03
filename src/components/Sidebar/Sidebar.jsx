import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
import SidebarWrapper from './SidebarWrapper/SidebarWrapper';

const SidebarStyled = styled.div`
  ${Styles.base}
`;

const Sidebar = ({ menuItems }) => (
  <SidebarStyled>
    {menuItems.map(item => (
      <SidebarWrapper menuItem={item} />
    ))}
  </SidebarStyled>
);

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Sidebar;
