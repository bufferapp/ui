import React from 'react';

import PropTypes from 'prop-types';
import {
  CrossSellStyled,
  CrossSellHeader,
  SubHeaderWrapper,
  CardsContainer,
  ButtonsContainer,
  ButtonWrapper,
  Footer,
  Card,
  TitleContainer,
  CardImage,
  Logo
} from './style';
import Text from '../../../Text/Text';
import Button from '../../../Button/Button';
// NOTE: Ideally this should be loaded from different JSON
// files. We need to improve the bundling of the library in order
// to be able to copy any present JSON files in order to do that.
import texts from './texts';
import { getStartTrialUrl } from './utils';

const AnalyzeLogo = () => (
  <svg height="100%" viewBox="0 0 181 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.7554 4.604C7.49175 4.604 0.804688 11.2851 0.804688 19.5413C0.804688 27.7976 7.49175 34.4787 15.7554 34.4787C24.0191 34.4787 30.7062 27.7976 30.7062 19.5413H15.7554V4.604Z" fill="#F3AFB9"></path><path fillRule="evenodd" clipRule="evenodd" d="M34.7838 15.4676C34.7838 7.21133 28.0967 0.530273 19.833 0.530273V15.4676H34.7838Z" fill="#132062"></path><path fillRule="evenodd" clipRule="evenodd" d="M58.27 20.8501L54.5459 9.76935L50.7946 20.8501H58.27ZM59.9282 25.8202H49.1092L47.4782 30.7088H41.6882L51.2024 3.57715H57.8351L67.3763 30.7088H61.5591L59.9282 25.8202ZM87.7638 18.8129V30.7085H82.762V19.4376C82.762 16.8032 81.1854 15.4452 78.902 15.4452C76.4555 15.4452 74.6343 16.8575 74.6343 20.2523V30.7085H69.6326V11.3171H74.6343V13.4898C75.8032 11.7516 77.8147 10.7739 80.4243 10.7739C84.5289 10.8011 87.7638 13.6799 87.7638 18.8129ZM100.431 15.7443C103.53 15.7443 105.841 17.9442 105.841 21.2032C105.841 24.4079 103.53 26.6621 100.431 26.6621C97.3866 26.6621 95.076 24.4623 95.076 21.2032C95.076 17.9442 97.3594 15.7443 100.431 15.7443ZM110.842 30.8717V11.5075H105.841V13.816C104.427 12.0507 102.361 10.9644 99.5069 10.9644C94.3693 10.9644 90.1016 15.4184 90.1016 21.2032C90.1016 26.988 94.3421 31.4421 99.5069 31.4421C102.334 31.4421 104.454 30.3286 105.841 28.5904V30.8717H110.842ZM119.731 3.57715H114.729V30.6816H119.731V3.57715ZM135.063 30.7083L142.103 11.3441V11.3169H136.748L132.453 24.3259L127.397 11.3169H121.933L129.898 30.0836C128.946 32.6637 127.56 33.8315 124.815 33.8044V38.4485C129.762 38.7201 133.051 36.303 135.063 30.7083ZM159.228 26.0105V30.7089H143.897V27.3684L152.079 16.0432H144.277V11.3447H158.82V14.6853L150.611 26.0105H159.228ZM170.427 15.2823C172.521 15.2823 174.614 16.423 175.239 19.1931H165.344C165.942 16.6945 167.736 15.2823 170.427 15.2823ZM175.185 24.7879C174.342 25.9014 172.792 26.7161 170.862 26.7161C168.253 26.7161 166.133 25.6298 165.399 23.0769H180.023C180.159 22.3979 180.213 21.7461 180.213 21.0128C180.213 15.2823 176.136 10.7739 170.427 10.7739C164.311 10.7739 160.179 15.228 160.179 21.0128C160.179 26.7976 164.284 31.2516 170.808 31.2516C174.505 31.2516 177.414 29.7579 179.235 27.1235L175.185 24.7879Z" fill="#231F20"></path></svg>
);

/**
 *
 */
export default class CrossSell extends React.Component {

  state = {
    data: {},
    product: '',
    environment: null
  }

  static getDerivedStateFromProps(props, state) {
    const { product, environment } = props;

    if (state.product !== product || state.environment !== environment) {
      return {
        product,
        environment,
        data: {
          ...texts[product],
          buttonUrl: getStartTrialUrl(product, environment)
        }
      }
    }

    return null
  }

  renderHeader = () => {
    const { data, product } = this.state;
    const { title, subtitle } = data;

    return (
      <CrossSellHeader>
        {/*
          NOTE: We will probably remove this if we want to make all
          cross-selling pages have the same kind of structure and content.
        */}
        {product === 'analyze' && (
          <Logo>
            <AnalyzeLogo />
          </Logo>
        )}
        <Text type="h1">{title}</Text>
        <SubHeaderWrapper>
          <Text type="h3">{subtitle}</Text>
        </SubHeaderWrapper>
      </CrossSellHeader>
    );
  };

  renderBody = () => {
    const { cards } = this.state.data;

    return (
      <CardsContainer>
        {cards.map(({ image, alt, title, description }, idx) => (
          <Card key={idx}>
            <CardImage src={image} alt={alt} />
            <TitleContainer>
              <Text type="h3">{title}</Text>
            </TitleContainer>
            <Text type="p">{description}</Text>
          </Card>
        ))}
      </CardsContainer>
    );
  };

  renderFooter = () => {
    const {
      buttonLabel,
      buttonUrl,
      priceTagline
    } = this.state.data;

    return (
      <Footer>
        <ButtonsContainer>
          <ButtonWrapper>
            <Button
              type="primary"
              size="large"
              onClick={() => window.location.replace(buttonUrl)}
              label={buttonLabel}
              fullWidth
            />
          </ButtonWrapper>
        </ButtonsContainer>
        <Text type="p">{priceTagline}</Text>
      </Footer>
    );
  };

  render() {
    return (
      <CrossSellStyled>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </CrossSellStyled>
    );
  }
}

CrossSell.propTypes = {
  product: PropTypes.oneOf(['publish', 'analyze', 'reply']).isRequired
};