import React from 'react';
import { ThemeProvider } from 'styled-components';
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

import { orangeDark } from '../style/colors';

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
      return (
        <Wrapper>
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={customHTML} />
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <Text type="paragraph" color="#FFF">
          {text}
        </Text>
        <ButtonWrapper>
          <Button
            type="primary"
            onClick={actionButton.action}
            label={actionButton.label}
            size="small"
          />
        </ButtonWrapper>
      </Wrapper>
    );
  };

  render() {
    const { isOpen } = this.state;
    const { themeColor } = this.props;

    if (isOpen) {
      return (
        <ThemeProvider theme={{ color: themeColor }}>
          <BannerStyled>
            {this.renderBannerContent()}
            <BannerCloseButton>
              <Button
                type="text"
                icon={<CrossIcon color={themeColor === 'blue' ? '#fff' : orangeDark} />}
                hasIconOnly
                onClick={this.closeBanner}
                label="Close"
                size="small"
              />
            </BannerCloseButton>
          </BannerStyled>
        </ThemeProvider>
      );
    }
    return null;
  }
}

Banner.propTypes = {
  /** The main text of the banner */
  text: PropTypes.string,

  /** The text of the Call To Action of the banner */
  actionButton: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
  }),

  /** custom html */
  customHTML: PropTypes.shape({ __html: PropTypes.string }),

  /** Theme color. Can be `'blue'` or `'orange'` */
  themeColor: PropTypes.oneOf(['blue', 'orange']),
};

Banner.defaultProps = {
  text: '',
  actionButton: {},
  customHTML: null,
  themeColor: 'blue',
};
