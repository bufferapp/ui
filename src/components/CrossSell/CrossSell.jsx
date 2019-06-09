import React from 'react';

import PropTypes from 'prop-types';
import {
  CrossSellStyled,
  CrossSellHeader,
  CardsContainer,
  ButtonContainer,
  Footer,
  Card,
  ButtonMargin,
  SVGContainer,
  TitleContainer,
  CardImage
} from './style';
import Text from '../Text/Text';
import Button from '../Button/Button';

export default class CrossSell extends React.Component {
  renderHeader = () => {
    const { texts } = this.props;

    return (
      <CrossSellHeader>
        <Text type="h1">{texts.title}</Text>
        <Text type="h3">{texts.subtitle}</Text>
      </CrossSellHeader>
    );
  };

  renderBody = () => {
    const { texts } = this.props;

    return (
      <CardsContainer>
        {texts.cards.map((card, idx) => (
          <Card key={idx}>
            <CardImage src={card.image} alt={card.alt} />
            <TitleContainer>
              <Text type="h3">{card.title}</Text>
            </TitleContainer>
            <Text type="p">{card.description}</Text>
          </Card>
        ))}
      </CardsContainer>
    );
  };

  renderFooter = () => {
    const { leftButton, rightButton, priceTagline } = this.props.texts;

    return (
      <Footer>
        <ButtonContainer>
          <ButtonMargin>
            <Button
              type="primary"
              size="large"
              onClick={leftButton.onClick}
              label={leftButton.label}
              fullWidth
            />
          </ButtonMargin>
          <ButtonMargin>
            <Button
              type="secondary"
              size="large"
              onClick={rightButton.onClick}
              label={rightButton.label}
              fullWidth
            />
          </ButtonMargin>
        </ButtonContainer>
        <Text type="p">{priceTagline}</Text>
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
  texts: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    })),
    leftButton: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    }),
    rightButton: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    }),
    priceTagline: PropTypes.string,
  }).isRequired,
};

CrossSell.defaultProps = {
  texts: {
    leftButton: {
      label: '',
      onClick: () => {}
    },
    rightButton: {
      label: '',
      onClick: () => {}
    }    
  }
};