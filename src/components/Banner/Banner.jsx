import React from 'react';

import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';
import CrossIcon from '../Icon/Icons/Cross';
import {
  BannerStyled,
  BannerCloseButton,
  Wrapper,
  ButtonWrapper,
} from './style';

export default class Banner extends React.Component {
  state = {
    isOpen: true,
  };

  closeBanner = () => {
    this.setState({ isOpen: false });
  };

  renderBannerContent = () => {
    const { customHTML, text, actionButton } = this.props;
    if (customHTML) {
      return <div dangerouslySetInnerHTML={customHTML} />; // eslint-disable-line
    }
    return (
      <Wrapper>
        <Text type="label" color="#FFF">
          {text}
        </Text>
        <ButtonWrapper>
          <Button
            type="primary"
            onClick={actionButton.action}
            label={actionButton.label}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  };

  render() {
    const { isOpen } = this.state;

    if (isOpen) {
      return (
        <BannerStyled>
          {this.renderBannerContent()}
          <BannerCloseButton>
            <Button
              type="text"
              icon={<CrossIcon color="white" />}
              hasIconOnly
              onClick={this.closeBanner}
              label="Close"
            />
          </BannerCloseButton>
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
  customHTML: PropTypes.shape({ __html: PropTypes.string }),
};

Banner.defaultProps = {
  text: '',
  actionButton: {},
  customHTML: null,
};
