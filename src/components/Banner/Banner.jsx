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
          <Text type="label" light>
            {this.props.text}
          </Text>
          <Button
            type="primary"
            onClick={this.props.actionButton.action}
            label={this.props.actionButton.label}
          />
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
  text: PropTypes.string.isRequired,
  actionButton: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
  }).isRequired,
};
