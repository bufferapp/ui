import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import Banner from '../Banner';
// import GlobalStyles from '../GlobalStyles';

import { AppShellStyled, Wrapper, Section, ContentWrapper } from './style';

/**
 * The AppShell component is a general purpose wrapper for all of our applications. At the moment it's primarily a wrapper for the `NavBar` component. Check out the example below to see how to integrate it into your app.
 */
const AppShell = ({
  activeProduct,
  user,
  helpMenuItems,
  sidebar,
  content,
  bannerOptions,
}) => (
  <AppShellStyled>
    {/* <GlobalStyles /> */}
    <NavBar
      activeProduct={activeProduct}
      user={user}
      helpMenuItems={helpMenuItems}
    />
    {bannerOptions && (
      <Banner
        text={bannerOptions.text}
        actionButton={bannerOptions.actionButton}
      />
    )}
    <Wrapper>
      {sidebar && <Section>{sidebar}</Section>}
      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  </AppShellStyled>
);

AppShell.propTypes = {
  /** The currently active (highlighted) product in the `NavBar`, one of `'publish', 'reply', 'analyze'` */
  activeProduct: PropTypes.oneOf(['publish', 'reply', 'analyze']),

  /** See the prop description in the `NavBar` component. */
  user: NavBar.propTypes.user, // eslint-disable-line

  /** See the prop description in the `NavBar` component. */
  helpMenuItems: NavBar.propTypes.helpMenuItems, // eslint-disable-line

  /** (Optional) Your sidebar component. */
  sidebar: PropTypes.node,

  /** (Optional) Your content component. */
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
};

AppShell.defaultProps = {
  sidebar: null,
  activeProduct: undefined,
  bannerOptions: null,
};

export default AppShell;
