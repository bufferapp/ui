import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Info as InfoIcon } from '@bufferapp/ui/Icon';

import { grayDarker, gray } from '../style/colors';
import { fontWeightMedium } from '../style/fonts';
import Select from '../Select';

import BufferLogo from './BufferLogo';
import NavBarMenu from './NavBarMenu/NavBarMenu';
import NavBarProducts from './NavBarProducts/NavBarProducts';


const NavBarStyled = styled.nav`
  height: 64px;
  width: 100vw;
  background: ${grayDarker};
  display: flex;
  justify-content: space-between;
`;

const NavBarLeft = styled.div`
  display: flex;
`;
const NavBarRight = styled.div`
  display: flex;
`;

const NavBarHelp = styled.a`
  height: 64px;
  display: flex;
  color: #fff;
  padding: 0 24px;
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  text-decoration: none;
  align-items: center;
  color: ${props => (props.active ? '#fff' : gray)};
  &:hover {
    color: #fff;
  }
  cursor: pointer;
`;

const NavBarHelpText = styled.span`
  margin-left: 8px;
`;


/**
 * The NavBar is not generally consumed alone, but instead used by the AppShell component. (This page is WIP. Examples coming soon.)
 */
const NavBar = ({ user, helpMenuItems }) => (
  <NavBarStyled>
    <NavBarLeft>
      <BufferLogo />
      <NavBarProducts />
    </NavBarLeft>
    <NavBarRight>
      {helpMenuItems && (
        <Select
          hideSearch
          customButton={handleClick => (
            <NavBarHelp onClick={handleClick}>
              <InfoIcon />
              <NavBarHelpText>Help</NavBarHelpText>
            </NavBarHelp>
          )}
          items={helpMenuItems}
          horizontalOffset="-16px"
          xPosition="right"
        />)}
      <Select
        hideSearch
        customButton={handleClick => (<NavBarMenu user={user} onClick={handleClick} />)}
        items={user.menuItems}
        horizontalOffset="16px"
      />
    </NavBarRight>
  </NavBarStyled>
);

NavBar.propTypes = {
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
  helpMenuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    component: PropTypes.node,
    hasDivider: PropTypes.bool,
    onItemClick: PropTypes.func,
  })),
};

NavBar.defaultProps = {
  helpMenuItems: null,
}

export default NavBar;
