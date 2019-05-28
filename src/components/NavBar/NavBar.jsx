import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Info as InfoIcon, ArrowLeft, Person as PersonIcon } from '../Icon';

import { grayDarker, gray } from '../style/colors';
import { fontWeightMedium } from '../style/fonts';
import Select from '../Select';

import BufferLogo from './BufferLogo';
import NavBarMenu from './NavBarMenu/NavBarMenu';
import NavBarProducts from './NavBarProducts/NavBarProducts';

export function getProductPath(baseUrl) {
  const [, productPath] = baseUrl.match(/https*:\/\/(.+)\.buffer\.com/);
  return productPath;
}

function getRedirectUrl(baseUrl) {
  const productPath = getProductPath(baseUrl);
  return `https://${productPath}.buffer.com`;
}

export function getLogoutUrl(baseUrl = '') {
  const productPath = getProductPath(baseUrl);
  return `https://login${
    productPath.includes('local') ? '.local' : ''
  }.buffer.com/logout?redirect=${getRedirectUrl(baseUrl)}`;
}

export function getAccountUrl(baseUrl = '', user) {
  return `https://account.buffer.com?redirect=${getRedirectUrl(
    baseUrl
  )}&username=${encodeURI(user.name)}`;
}

const NavBarStyled = styled.nav`
  height: 56px;
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
  height: 100%;
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
    background-color: #525252;
  }
  cursor: pointer;
`;

const NavBarHelpText = styled.span`
  margin-left: 8px;
`;

export function appendMenuItem(ignoreMenuItems, menuItem) {
  if (!ignoreMenuItems) {
    return menuItem;
  }

  return ignoreMenuItems.includes(menuItem.id) ? null : menuItem;
}

/**
 * The NavBar is not consumed alone, but instead is used by the AppShell component. Go check out the AppShell component to learn more.
 */
class NavBar extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.user.name !== this.props.user.name;
  }

  render() {
    const { activeProduct, user, helpMenuItems, onLogout } = this.props;
    return (
      <NavBarStyled>
        <NavBarLeft>
          <BufferLogo />
          <NavBarProducts activeProduct={activeProduct} />
        </NavBarLeft>
        <NavBarRight>
          {helpMenuItems && (
            <Select
              hideSearch
              capitalizeItemLabel={false}
              customButton={handleClick => (
                <NavBarHelp onClick={handleClick}>
                  <InfoIcon />
                  <NavBarHelpText>Help</NavBarHelpText>
                </NavBarHelp>
              )}
              items={helpMenuItems}
              horizontalOffset="-16px"
              xPosition="right"
            />
          )}
          <Select
            hideSearch
            capitalizeItemLabel={false}
            xPosition="right"
            customButton={handleClick => (
              <NavBarMenu user={user} onClick={handleClick} />
            )}
            items={[
              appendMenuItem(user.ignoreMenuItems, {
                id: 'account',
                title: 'Account',
                icon: <PersonIcon color={gray} />,
                onItemClick: () => {
                  window.location.assign(
                    getAccountUrl(window.location.href, this.props.user)
                  );
                },
              }),
              ...user.menuItems,
              appendMenuItem(user.ignoreMenuItems, {
                id: 'logout',
                title: 'Logout',
                icon: <ArrowLeft color={gray} />,
                hasDivider: user.menuItems && user.menuItems.length > 0,
                onItemClick: () => {
                  if (typeof onLogout === 'function') onLogout();
                  window.location.assign(getLogoutUrl(window.location.href));
                },
              }),
            ].filter(e => e)}
            horizontalOffset="-16px"
          />
        </NavBarRight>
      </NavBarStyled>
    );
  }
}

NavBar.propTypes = {
  /** The currently active (highlighted) product in the `NavBar`, one of `'publish', 'reply', 'analyze'` */
  activeProduct: PropTypes.oneOf(['publish', 'reply', 'analyze']),

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    /** If missing we will use Gravatar to get the user avatar by email */
    avatar: PropTypes.string,
    /** If missing we will use Gravatar to get the user avatar by email */
    ignoreMenuItems: PropTypes.arrayOf(PropTypes.string),
    menuItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        component: PropTypes.func,
        hasDivider: PropTypes.bool,
        onItemClick: PropTypes.func,
      })
    ).isRequired,
  }).isRequired,
  helpMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      component: PropTypes.node,
      hasDivider: PropTypes.bool,
      onItemClick: PropTypes.func,
    })
  ),

  onLogout: PropTypes.func
};

NavBar.defaultProps = {
  activeProduct: undefined,
  helpMenuItems: null,
  onLogout: undefined
};

export default NavBar;
