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
import CrossSellContent from './CrossSellContent/CrossSellContent';
import Text from '../Text/Text';
import Button from '../Button/Button';

export default class CrossSell extends React.Component {
  renderHeader = () => {
    const { product } = this.props;

    if (product === 'reply') {
      return (
        <CrossSellHeader>
          <Text type="h1">Add Buffer Reply to your account?</Text>
          <Text type="h3">
            Resolve customer questions and engage your fans at the speed of
            social. Create a remarkable brand experience.
          </Text>
        </CrossSellHeader>
      );
    }
  };

  renderBody = () => {
    const { product } = this.props;
    const cards = [
      {
        image: 'http://placekitten.com/259/167',
        title: 'Single Team Inbox',
        description:
          'Reply to all your Instagram, Facebook and Twitter messages in one collaborative team inbox - DMs, comments, mentions and more. ',
      },
      {
        image: 'http://placekitten.com/259/167',
        title: 'Single Team Inbox',
        description:
          'Reply to all your Instagram, Facebook and Twitter messages in one collaborative team inbox - DMs, comments, mentions and more. ',
      },
      {
        image: 'http://placekitten.com/259/167',
        title: 'Single Team Inbox',
        description:
          'Reply to all your Instagram, Facebook and Twitter messages in one collaborative team inbox - DMs, comments, mentions and more. ',
      },
    ];

    if (product === 'reply') {
      return (
        <CardsContainer>
          {cards.map(card => (
            <Card>
              <img src={card.image} alt="kitty" />
              <CustomH3>{card.title}</CustomH3>
              <Text type="p">{card.description}</Text>
            </Card>
          ))}
        </CardsContainer>
      );
    }
  };

  renderFooter = () => {
    const { product } = this.props;

    if (product === 'reply') {
      return (
        <Footer>
          <ButtonContainer>
            <ButtonMargin>
              <Button
                type="primary"
                size="large"
                onClick={() => {}}
                label="Start a 14-Day Free Trial"
                fullWidth
              />
            </ButtonMargin>
            <ButtonMargin>
              <Button
                type="secondary"
                size="large"
                onClick={() => {}}
                label="Learn More About Buffer Reply"
                fullWidth
              />
            </ButtonMargin>
          </ButtonContainer>
          <Text type="p">Pricing starts at $50/mo. Cancel anytime.</Text>
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
    }
  };

  render() {
    return (
      <CrossSellStyled>
        <CrossSellContent
          header={this.renderHeader()}
          body={this.renderBody()}
          footer={this.renderFooter()}
        />
      </CrossSellStyled>
    );
  }
}

CrossSell.propTypes = {
  product: PropTypes.string.isRequired,
};
