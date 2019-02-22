import React from 'react'
import PropTypes from 'prop-types'
import SidebarItem from '../SidebarItem/SidebarItem'
import {
  SidebarSectionStyled,
  Header
} from './style'

const SidebarSection = ({ name, items }) => (
  <SidebarSectionStyled>
    <Header>
      {name}
    </Header>
    <div>
      {items.map(({ icon = null, label, url }, idx) => (
        <SidebarItem
          key={idx}
          icon={icon}
          label={label}
          url={url}
        />
      ))}
    </div>
  </SidebarSectionStyled>
)

SidebarSection.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SidebarSection;