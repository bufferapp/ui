import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Info as InfoIcon, ArrowLeft, Person as PersonIcon, Cross } from '../Icon';

import { gray, blueDarker, grayLight, grayLighter, grayDark, orangeLighter } from '../style/colors';
import {
  fontWeightMedium,
  fontFamily
} from '../style/fonts';

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

export function getStopImpersonationUrl(baseUrl = '') { 
  const productPath = getProductPath(baseUrl);
  return `https://admin${
    productPath.includes('local') ? '-next.local' : ''
  }.buffer.com/stopImpersonation?redirect=${getRedirectUrl(baseUrl)}`;
}

const NavBarStyled = styled.nav`
  background: #fff;
  border-bottom: 1px solid ${gray};
  border-top: ${props => (props.isImpersonation ? `2px solid ${orangeLighter}` : `none`)};
  box-shadow: 0 1px 10px -5px rgba(0,0,0,.15);
  display: flex;
  height: 56px;
  justify-content: space-between;
  position: relative;
  width: 100vw;
`;

const NavBarLeft = styled.div`
  display: flex;
`;
const NavBarRight = styled.div`
  display: flex;
`;

const NavBarHelp = styled.a`
  align-items: center;
  color: #fff;
  color: ${props => (props.active ? blueDarker : grayDark)};
  display: flex;
  font-size: 16px;
  font-family: ${fontFamily};
  font-weight: ${fontWeightMedium};
  height: 100%;
  padding: 0 24px;
  position: relative;
  text-decoration: none;
  z-index: 2;
  &:hover {
    color: ${props => (props.active ? blueDarker : grayDark)};
    background-color: ${grayLighter};
  }
  cursor: pointer;
`;

const NavBarHelpText = styled.span`
  margin-left: 8px;
`;

const NavBarVerticalRule = styled.div`
  background-color: ${grayLight};
  height: 24px;
  margin-left: -1px;
  margin-right: -1px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  z-index: 1;
  display: ${props => (props.isImpersonation ? `none` : `block`)};
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
    return nextProps.user.name !== this.props.user.name ||
      nextProps.user.email !== this.props.user.email;
  }

  render() {
    const { activeProduct, user, helpMenuItems, onLogout, isImpersonation } = this.props;
    return (
      <NavBarStyled isImpersonation={isImpersonation}>
        <NavBarLeft>
          <BufferLogo />
          <NavBarVerticalRule />
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
          <NavBarVerticalRule isImpersonation={isImpersonation} />
          <Select
            hideSearch
            capitalizeItemLabel={false}
            xPosition="right"
            isImpersonation={isImpersonation}
            customButton={handleClick => (
              <NavBarMenu user={user} onClick={handleClick} isImpersonation={isImpersonation} />
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
              appendMenuItem(user.ignoreMenuItems, isImpersonation ? {
                id: 'Stop Impersonation',
                title: 'Stop Impersonation',
                icon: <Cross color={gray} />,
                hasDivider: user.menuItems && user.menuItems.length > 0,
                onItemClick: () => {
                  window.location.assign(
                    getStopImpersonationUrl(window.location.href)
                  );
                },
              } : {
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
  isImpersonation: PropTypes.bool,

  onLogout: PropTypes.func
};

NavBar.defaultProps = {
  activeProduct: undefined,
  helpMenuItems: null,
  isImpersonation: false,
  onLogout: undefined
};

export default NavBar;
