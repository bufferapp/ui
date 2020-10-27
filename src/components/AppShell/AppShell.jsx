import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import Banner from '../Banner';
// import GlobalStyles from '../GlobalStyles';

import {
  AppShellStyled,
  Wrapper,
  SidebarWrapper,
  ContentWrapper,
} from './style';
import useDeprecatedWarning from '../util/deprecated-warning';

const ENABLE_ENGAGE_URL = 'https://login.buffer.com/signup?product=engage';

/**
 * The AppShell component is a general purpose wrapper for all of our applications. At the moment it's primarily a wrapper for the `NavBar` component. Check out the example below to see how to integrate it into your app.
 */
const AppShell = ({
  featureFlips,
  enabledProducts,
  activeProduct,
  user,
  helpMenuItems,
  sidebar,
  content,
  bannerOptions,
  onLogout,
  displaySkipLink,
  orgSwitcher,
  isImpersonation,
}) => {
  useDeprecatedWarning(
    'AppShell is deprecated as of @bufferapp/ui v5.51.0 and will be deleted in v6.0.0. Please use @bufferapp/app-shell instead (see https://github.com/bufferapp/app-shell).'
  );

  const engageEnabled = enabledProducts.includes('engage');
  const engageAccess = featureFlips.includes('engageRollOut');

  let products = ['publish', 'analyze'];
  if (engageEnabled || engageAccess) {
    products.push('engage');
  }

  products = products.map(product => {
    const productURL = `https://${product}.buffer.com`;

    if (product === 'engage') {
      return {
        id: product,
        isNew: true,
        href: engageEnabled ? productURL : ENABLE_ENGAGE_URL,
      };
    }

    return {
      id: product,
      isNew: false,
      href: productURL,
    };
  });

  return (
    <AppShellStyled>
      {/* <GlobalStyles /> */}
      <NavBar
        products={products}
        activeProduct={activeProduct}
        user={user}
        helpMenuItems={helpMenuItems}
        onLogout={onLogout}
        displaySkipLink={displaySkipLink}
        orgSwitcher={orgSwitcher}
        isImpersonation={isImpersonation}
      />
      {bannerOptions && <Banner {...bannerOptions} />}
      <Wrapper>
        {sidebar && <SidebarWrapper>{sidebar}</SidebarWrapper>}
        <ContentWrapper>{content}</ContentWrapper>
      </Wrapper>
    </AppShellStyled>
  );
};

AppShell.propTypes = {
  /** The list of features enabled for the user */
  featureFlips: PropTypes.arrayOf(PropTypes.string),

  /** The list of products that the user has enabled on their account. */
  enabledProducts: PropTypes.arrayOf(PropTypes.string),

  /** The currently active (highlighted) product in the `NavBar`. */
  activeProduct: PropTypes.oneOf(['publish', 'analyze', 'engage']),

  /** The current user object */
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

  /** Menu items to show in the help menu */
  helpMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      component: PropTypes.node,
      hasDivider: PropTypes.bool,
      onItemClick: PropTypes.func,
    })
  ),

  /** (Optional) Your sidebar component. */
  sidebar: PropTypes.node,

  /** Your content component. */
  content: PropTypes.node.isRequired,

  /** (Optional) Content of banner displayed below the navbar */
  bannerOptions: PropTypes.shape({
    text: PropTypes.string,
    actionButton: PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
    }),
    customHTML: PropTypes.shape({ __html: PropTypes.string }),
  }),

  /** (Optional) Callback to be called before logout */
  onLogout: PropTypes.func,

  /** (Optional) Is the current session an impersonation session */
  isImpersonation: PropTypes.bool,

  displaySkipLink: PropTypes.bool,
};

AppShell.defaultProps = {
  featureFlips: [],
  sidebar: null,
  enabledProducts: [],
  activeProduct: undefined,
  bannerOptions: null,
  onLogout: undefined,
  helpMenuItems: null,
  isImpersonation: false,
  displaySkipLink: false,
};

export default AppShell;
