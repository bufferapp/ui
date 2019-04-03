import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarItem from '../SidebarItem/SidebarItem';

const SidebarWrapperStyled = styled.div`
  ${Styles.base}
`;

const SidebarWrapper = ({ menuItem }) => (
  <SidebarWrapperStyled>
    <SidebarHeader heading={menuItem.title} />
    {menuItem.items.map(item => (
      <SidebarItem item={item.title} />
    ))}
  </SidebarWrapperStyled>
);

SidebarWrapper.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default SidebarWrapper;
