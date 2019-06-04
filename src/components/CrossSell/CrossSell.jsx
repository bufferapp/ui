import React from 'react';

import PropTypes from 'prop-types';
import { CrossSellStyled, CrossSellHeader, CardsContainer } from './style';
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
        image: 'http://placekitten.com/167/259',
        title: 'Single Team Inbox',
        description:
          'Reply to all your Instagram, Facebook and Twitter messages in one collaborative team inbox - DMs, comments, mentions and more. ',
      },
      {
        image: 'http://placekitten.com/167/259',
        title: 'Single Team Inbox',
        description:
          'Reply to all your Instagram, Facebook and Twitter messages in one collaborative team inbox - DMs, comments, mentions and more. ',
      },
      {
        image: 'http://placekitten.com/167/259',
        title: 'Single Team Inbox',
        description:
          'Reply to all your Instagram, Facebook and Twitter messages in one collaborative team inbox - DMs, comments, mentions and more. ',
      },
    ];

    if (product === 'reply') {
      return (
        <CardsContainer>
          {cards.map(card => (
            <div>
              <img src={card.image} alt="kitty" />
              <div>{card.title}</div>
              <div>{card.description}</div>
            </div>
          ))}
        </CardsContainer>
      );
    }
  };

  renderFooter = () => {
    const { product } = this.props;

    if (product === 'reply') {
      return (
        <div>
          <Button
            type="primary"
            onClick={() => {}}
            label="Click Me"
            fullWidth
          />

          <Button
            type="secondary"
            onClick={() => {}}
            label="Click Me"
            fullWidth
          />
          <Text type="p">Pricing starts at $50/mo. Cancel anytime.</Text>
        </div>
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
