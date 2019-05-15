import React from 'react';
import PropTypes from 'prop-types';
import { SidebarStyled } from './style';
import Section from './Section/Section';

const Sidebar = ({ menuItems }) => (
  <SidebarStyled>
    {menuItems.map(item => (
      <Section menuItem={item} />
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
