import React from 'react';

import PropTypes from 'prop-types';
import {
  CrossSellStyled,
  CrossSellHeader,
  CardsContainer,
  ButtonContainer,
  Footer,
  Card,
  CustomH3,
  ButtonMargin,
  SVGContainer,
} from './style';
import Text from '../Text/Text';
import Button from '../Button/Button';
import texts from './texts';

export default class CrossSell extends React.Component {
  renderHeader = () => {
    const { product } = this.props;

    return (
      <CrossSellHeader>
        <Text type="h1">{texts[product].title}</Text>
        <Text type="h3">{texts[product].subtitle}</Text>
      </CrossSellHeader>
    );
  };

  renderBody = () => {
    const { product } = this.props;

    return (
      <CardsContainer>
        {texts[product].cards.map(card => (
          <Card>
            <img src={card.image} alt="kitty" />
            <CustomH3>{card.title}</CustomH3>
            <Text type="p">{card.description}</Text>
          </Card>
        ))}
      </CardsContainer>
    );
  };

  renderFooter = () => {
    const { product } = this.props;
    return (
      <Footer>
        <ButtonContainer>
          <ButtonMargin>
            <Button
              type="primary"
              size="large"
              onClick={() => {}}
              label={texts[product].leftButtonLabel}
              fullWidth
            />
          </ButtonMargin>
          <ButtonMargin>
            <Button
              type="secondary"
              size="large"
              onClick={() => {}}
              label={texts[product].rightButtonLabel}
              fullWidth
            />
          </ButtonMargin>
        </ButtonContainer>
        <Text type="p">{texts[product].priceTagline}</Text>
        <SVGContainer>
          <svg
            viewBox="0 0 1280 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1364.93 523L1419 364.723C1419 364.723 1304.97 -127.978 974.074 31.9313C779.673 125.878 530.916 100.499 389.5 65.6508C95.8639 -6.70832 -53.8721 165.309 -174.355 199.539C-294.838 233.769 -335 101.25 -335 101.25V523H1364.93Z"
              fill="white"
            />
          </svg>
        </SVGContainer>
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
  product: PropTypes.string.isRequired,
};
