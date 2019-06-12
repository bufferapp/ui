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
        <SubHeaderWrapper>
          <Text type="h3">{texts.subtitle}</Text>
        </SubHeaderWrapper>
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
    const { button, priceTagline } = this.props.texts;

    return (
      <Footer>
        <ButtonsContainer>
          <ButtonWrapper>
            <Button
              type="primary"
              size="large"
              onClick={() => window.location.replace(button.url)}
              label={button.label}
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
    button: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    }),
    priceTagline: PropTypes.string,
  }).isRequired,
};