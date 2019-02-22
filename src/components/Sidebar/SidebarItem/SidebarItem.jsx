import React from 'react'
import PropTypes from 'prop-types'
import {
  SidebarItemStyled,
  Label
} from './style'

const SidebarItem = ({ icon: Icon, label, url, active }) => (
  <SidebarItemStyled href={url} active={active}>
    {Icon && <Icon color="white" />}
    <Label hasIcon={!!Icon}>{label}</Label>
  </SidebarItemStyled>
)

SidebarItem.propTypes = {
  icon: PropTypes.func,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool
}

SidebarItem.defaultProps = {
  icon: null,
  active: false
}

export default SidebarItem