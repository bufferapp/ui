import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import Banner from '../Banner';
import CrossSell from './components/CrossSell';

import {
  AppShellStyled,
  Wrapper,
  SidebarWrapper,
  ContentWrapper,
} from './style';

/**
 * The AppShell component is a general purpose wrapper for all of our applications. At the moment it's primarily a wrapper for the `NavBar` component. Check out the example below to see how to integrate it into your app.
 */
class AppShell extends Component {

  state = {
    crossSelling: false,
    crossSellingProduct: '',
    loaded: false,
    products: [],
    error: null
  }

  componentDidMount() {
    fetch('/core/buffer-products')
      .then(res => res.json())
      .then(
        (result) => {
          console.log('- Result OK');
          this.setState({
            loaded: true,
            products: result.data.products
          });
        },
        (error) => {
          console.log('- Result ERROR');
          this.setState({
            loaded: true,
            error
          });
        }
      )
  }

  onProductClicked = (event, product) => {
    const {
      loaded,
      products,
      error
    } = this.state;

    if (!loaded || error) return;

    if (!products.includes(product) && product !== 'publish') {
      event.preventDefault();
      this.setState({
        crossSelling: true,
        crossSellingProduct: product
      });
    }
  }

  render() {
    const {
      activeProduct,
      user,
      helpMenuItems,
      sidebar,
      content,
      bannerOptions,
      onLogout,
      environment
    } = this.props

    const {
      crossSelling,
      crossSellingProduct
    } = this.state

    return (
      <AppShellStyled>
        <NavBar
          activeProduct={activeProduct}
          user={user}
          helpMenuItems={helpMenuItems}
          onLogout={onLogout}
          onProductClicked={this.onProductClicked}
        />
        {crossSelling ?
          <CrossSell product={crossSellingProduct} environment={environment} />
        :
          <>
            {bannerOptions && (
              <Banner
                {...bannerOptions}
              />
            )}
            <Wrapper>
              {sidebar && <SidebarWrapper>{sidebar}</SidebarWrapper>}
              <ContentWrapper>{content}</ContentWrapper>
            </Wrapper>
          </>
        }
      </AppShellStyled>
    )
  }
}

AppShell.propTypes = {
  /** The currently active (highlighted) product in the `NavBar`, one of `'publish', 'reply', 'analyze'` */
  activeProduct: PropTypes.oneOf(['publish', 'reply', 'analyze']),

  /** See the prop description in the `NavBar` component. */
  user: NavBar.propTypes.user, // eslint-disable-line

  /** See the prop description in the `NavBar` component. */
  helpMenuItems: NavBar.propTypes.helpMenuItems, // eslint-disable-line

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

  /**
   * The environment where the app is currently running on.
   * This is used to generate some URLs like the button URL on the
   * cross-selling pages.
   */
  environment: PropTypes.string
};

AppShell.defaultProps = {
  sidebar: null,
  activeProduct: undefined,
  bannerOptions: null,
  onLogout: undefined,
  environment: 'production'
};

export default AppShell;
