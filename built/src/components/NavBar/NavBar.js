import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Cross, Info as InfoIcon, ArrowLeft, Person as PersonIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, Facebook as FacebookIcon, Pinterest as PinterestIcon, LinkedIn as LinkedInIcon, } from '../Icon';
import { gray, blueDarker, grayLight, grayLighter, grayDark, } from '../style/colors';
import { fontWeightMedium, fontFamily } from '../style/fonts';
import Link from '../Link';
import DropdownMenu from '../DropdownMenu';
import BufferLogo from './BufferLogo';
import NavBarMenu from './NavBarMenu/NavBarMenu';
import NavBarProducts from './NavBarProducts/NavBarProducts';
export function getProductPath(baseUrl) {
    const result = baseUrl.match(/https*:\/\/(.+)\.buffer\.com/);
    let productPath = baseUrl;
    if (result instanceof Array) {
        ;
        [, productPath] = result;
    }
    return productPath;
}
function getRedirectUrl(baseUrl) {
    const productPath = getProductPath(baseUrl);
    return `https://${productPath}.buffer.com`;
}
export function getLogoutUrl(baseUrl = '') {
    const productPath = getProductPath(baseUrl);
    return `https://login${productPath.includes('local') ? '.local' : ''}.buffer.com/logout?redirect=${getRedirectUrl(baseUrl)}`;
}
export function getAccountUrl(baseUrl = '', user) {
    return `https://account.buffer.com?redirect=${getRedirectUrl(baseUrl)}&username=${encodeURI(user.name)}`;
}
export const ORG_SWITCHER = 'org_switcher';
export function getStopImpersonationUrl() {
    const { hostname } = window.location;
    if (!hostname.endsWith('buffer.com')) {
        return null;
    }
    return `https://admin${hostname.includes('local') ? '-next.local' : ''}.buffer.com/clearImpersonation`;
}
const NavBarStyled = styled.nav `
  background: #fff;
  border-bottom: 1px solid ${gray};
  box-shadow: 0 1px 10px -5px rgba(0, 0, 0, 0.15);
  display: flex;
  height: 56px;
  justify-content: space-between;
  position: relative;
  width: 100vw;
`;
const NavBarLeft = styled.div `
  display: flex;
`;
const NavBarRight = styled.nav `
  display: flex;
`;
const NavBarHelp = styled.a `
  align-items: center;
  color: #fff;
  color: ${(props) => (props.active ? blueDarker : grayDark)};
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
    color: ${(props) => (props.active ? blueDarker : grayDark)};
    background-color: ${grayLighter};
  }
  cursor: pointer;
`;
const NavBarHelpText = styled.span `
  margin-left: 8px;
`;
const NavBarVerticalRule = styled.div `
  background-color: ${grayLight};
  height: 24px;
  margin-left: -1px;
  margin-right: -1px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  z-index: 1;
`;
const SkipToMainLink = styled(Link) `
  position: absolute;
  top: -1000px;
  left: -1000px;
  height: 1px;
  width: 1px;
  overflow: hidden;

  :focus {
    left: auto;
    top: auto;
    position: relative;
    height: auto;
    width: auto;
    overflow: visible;
    margin: auto;
    margin-left: 10px;
  }
`;
export function appendMenuItem(ignoreMenuItems, menuItem) {
    if (!ignoreMenuItems) {
        return menuItem;
    }
    return ignoreMenuItems.includes(menuItem.id) ? null : menuItem;
}
function getNetworkIcon(item) {
    if (!item.network)
        return null;
    switch (item.network) {
        case 'instagram':
            return React.createElement(InstagramIcon, { size: "medium" });
        case 'twitter':
            return React.createElement(TwitterIcon, { size: "medium" });
        case 'facebook':
            return React.createElement(FacebookIcon, { size: "medium" });
        case 'pinterest':
            return React.createElement(PinterestIcon, { size: "medium" });
        case 'linkedin':
            return React.createElement(LinkedInIcon, { size: "medium" });
        default:
            break;
    }
}
export function appendOrgSwitcher(orgSwitcher) {
    if (!orgSwitcher || !orgSwitcher.menuItems) {
        return [];
    }
    return orgSwitcher.menuItems.map((item, index) => {
        item.type = ORG_SWITCHER;
        if (orgSwitcher.title && index === 0) {
            item.hasDivider = true;
            item.dividerTitle = orgSwitcher.title;
        }
        if (item.subItems) {
            item.subItems.forEach((subItem) => {
                subItem.icon = getNetworkIcon(subItem);
            });
        }
        if (!item.subItems || item.subItems.length === 0) {
            item.defaultTooltipMessage = 'No channels connected yet.';
        }
        return item;
    });
}
class NavBar extends React.Component {
    shouldComponentUpdate(nextProps) {
        return (nextProps.user.name !== this.props.user.name ||
            nextProps.user.email !== this.props.user.email ||
            nextProps.isImpersonation !== this.props.isImpersonation ||
            nextProps.products !== this.props.products ||
            nextProps.orgSwitcher !== this.props.orgSwitcher);
    }
    render() {
        const { products, activeProduct, user, helpMenuItems, onLogout, displaySkipLink, isImpersonation, orgSwitcher, } = this.props;
        const orgSwitcherHasItems = orgSwitcher && orgSwitcher.menuItems && orgSwitcher.menuItems.length > 0;
        return (React.createElement(NavBarStyled, { "aria-label": "Main menu" },
            React.createElement(NavBarLeft, null,
                displaySkipLink && (React.createElement(SkipToMainLink, { href: "#main" }, "Skip to main content")),
                React.createElement(BufferLogo, null),
                React.createElement(NavBarVerticalRule, null),
                React.createElement(NavBarProducts, { products: products, activeProduct: activeProduct })),
            React.createElement(NavBarRight, null,
                helpMenuItems && (React.createElement(DropdownMenu, { xPosition: "right", ariaLabel: "Help Menu", ariaLabelPopup: "Help", menubarItem: (React.createElement(NavBarHelp, null,
                        React.createElement(InfoIcon, null),
                        React.createElement(NavBarHelpText, null, "Help"))), items: helpMenuItems })),
                React.createElement(NavBarVerticalRule, null),
                React.createElement(DropdownMenu, { xPosition: "right", ariaLabel: "Account Menu", ariaLabelPopup: "Account", horizontalOffset: "-16px", isImpersonation: isImpersonation, menubarItem: React.createElement(NavBarMenu, { user: user, isImpersonation: isImpersonation }), items: [
                        ...appendOrgSwitcher(orgSwitcher),
                        appendMenuItem(user.ignoreMenuItems, {
                            id: 'account',
                            title: 'Account',
                            icon: React.createElement(PersonIcon, { color: gray }),
                            hasDivider: orgSwitcherHasItems,
                            onItemClick: () => {
                                window.location.assign(getAccountUrl(window.location.href, this.props.user));
                            },
                        }),
                        ...user.menuItems,
                        appendMenuItem(user.ignoreMenuItems, isImpersonation
                            ? {
                                id: 'Stop Impersonation',
                                title: 'Stop Impersonation',
                                icon: React.createElement(Cross, { color: gray }),
                                hasDivider: user.menuItems && user.menuItems.length > 0,
                                onItemClick: () => {
                                    window.location.assign(getStopImpersonationUrl());
                                },
                            }
                            : {
                                id: 'logout',
                                title: 'Logout',
                                icon: React.createElement(ArrowLeft, { color: gray }),
                                hasDivider: user.menuItems && user.menuItems.length > 0,
                                onItemClick: () => {
                                    if (typeof onLogout === 'function')
                                        onLogout();
                                    window.location.assign(getLogoutUrl(window.location.href));
                                },
                            }),
                    ].filter((e) => e) }))));
    }
}
NavBar.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        isNew: PropTypes.bool,
        href: PropTypes.string,
    })),
    activeProduct: PropTypes.oneOf(['publish', 'analyze', 'engage']),
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        ignoreMenuItems: PropTypes.arrayOf(PropTypes.string),
        menuItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            component: PropTypes.func,
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
    isImpersonation: PropTypes.bool,
    onLogout: PropTypes.func,
    displaySkipLink: PropTypes.bool,
    orgSwitcher: PropTypes.shape({
        title: PropTypes.string.isRequired,
        menuItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            selected: PropTypes.bool.isRequired,
            onItemClick: PropTypes.func,
        })).isRequired,
    }),
};
NavBar.defaultProps = {
    products: [],
    activeProduct: undefined,
    helpMenuItems: null,
    isImpersonation: false,
    onLogout: undefined,
    displaySkipLink: false,
    orgSwitcher: undefined,
};
export default NavBar;
//# sourceMappingURL=NavBar.js.map