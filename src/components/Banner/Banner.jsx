import React from 'react';

import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';
import CrossIcon from '../Icon/Icons/Cross';
import { BannerStyled } from './style';

export default class Banner extends React.Component {
  state = {
    isOpen: true,
  };

  closeBanner = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <BannerStyled>
          {this.props.text && (
            <React.Fragment>
              <Text type="label" light>
                {this.props.text}
              </Text>
              <Button
                type="primary"
                onClick={this.props.actionButton.action}
                label={this.props.actionButton.label}
              />
            </React.Fragment>
          )}
          {this.props.customHTML && (
            <div dangerouslySetInnerHTML={this.props.customHTML} /> // eslint-disable-line
          )}

          <Button
            type="text"
            icon={<CrossIcon />}
            hasIconOnly
            onClick={this.closeBanner}
            label="Click Me"
          />
        </BannerStyled>
      );
    }
    return null;
  }
}

Banner.propTypes = {
  /** (Optional) The main text of the banner */
  text: PropTypes.string,

  /** (Optional) The text of the Call To Action of the banner */
  actionButton: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
  }),

  /** (Optional) custom html */
  customHTML: PropTypes.shape({}),
};

Banner.defaultProps = {
  text: '',
  actionButton: {},
  customHTML: null,
};
