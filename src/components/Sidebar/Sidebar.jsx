import React from 'react';
import PropTypes from 'prop-types';
import { SidebarStyled } from './style';
import Section from './Section/Section';
// import Footer from './Footer/Footer';

const Sidebar = ({ menuItems }) => (
  <SidebarStyled>
    {menuItems.map(item => (
      <Section menuItem={item} />
    ))}
    {/* <Footer onlineUsers={onlineUsers} /> */}
  </SidebarStyled>
);

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  // onlineUsers: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string,
  //     name: PropTypes.string,
  //     orgId: PropTypes.string,
  //     profileImageUrl: PropTypes.string,
  //   })
  // ).isRequired,
};

export default Sidebar;
