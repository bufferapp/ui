import React from 'react';
import PropTypes from 'prop-types';
import { SidebarStyled } from './style';
import SidebarSection from './SidebarSection/SidebarSection';

const Sidebar = ({ sections }) => (
  <SidebarStyled>
    {sections.map(({ name, items }, idx) => (
      <SidebarSection
        key={idx}
        name={name}
        items={items}
      />
    ))}
  </SidebarStyled>
);

Sidebar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
}

Sidebar.defaultProps = {
  sections: []
}

export default Sidebar;
