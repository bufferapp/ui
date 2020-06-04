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

const ENABLE_PUBLISH_URL = 'https://buffer.com/pricing/publish';
const ENABLE_ANALYZE_URL = 'https://account.buffer.com/analyze';
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
}) => {

  const products = [
    {
      id: 'publish',
      isNew: false,
      visible: true,
      enabled: enabledProducts.includes('publish'),
      enableURL: ENABLE_PUBLISH_URL
    },
    {
      id: 'analyze',
      isNew: false,
      visible: true,
      enabled: enabledProducts.includes('analyze'),
      enableURL: ENABLE_ANALYZE_URL
    },
    {
      id: 'engage',
      isNew: true,
      visible: featureFlips.includes('engageAccess'),
      enabled: enabledProducts.includes('engage'),
      enableURL: ENABLE_ENGAGE_URL
    }
  ];

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
      />
      {bannerOptions && (
        <Banner
          {...bannerOptions}
        />
      )}
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
  enabledProducts: PropTypes.oneOf(['publish', 'analyze', 'engage']),

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
  displaySkipLink: PropTypes.bool,
};

AppShell.defaultProps = {
  featureFlips: ['engageAccess'],
  sidebar: null,
  enabledProducts: [],
  activeProduct: undefined,
  bannerOptions: null,
  onLogout: undefined,
  helpMenuItems: null,
  displaySkipLink: false,
};

export default AppShell;
