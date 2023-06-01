import React from 'react';
import PropTypes from 'prop-types';
import { CrossSellStyled, CrossSellHeader, SubHeaderWrapper, CardsContainer, ButtonsContainer, ButtonWrapper, Footer, Card, TitleContainer, CardImage, } from './style';
import Text from '../Text/Text';
import Button from '../Button/Button';
export default class CrossSell extends React.Component {
    constructor() {
        super(...arguments);
        this.renderHeader = () => {
            const { texts } = this.props;
            return (React.createElement(CrossSellHeader, null,
                React.createElement(Text, { type: "h1" }, texts.title),
                React.createElement(SubHeaderWrapper, null,
                    React.createElement(Text, { type: "h3" }, texts.subtitle))));
        };
        this.renderBody = () => {
            const { texts } = this.props;
            return (React.createElement(CardsContainer, null, texts.cards.map((card, idx) => (React.createElement(Card, { key: idx },
                React.createElement(CardImage, { src: card.image, alt: card.alt }),
                React.createElement(TitleContainer, null,
                    React.createElement(Text, { type: "h3" }, card.title)),
                React.createElement(Text, { type: "p" }, card.description))))));
        };
        this.renderFooter = () => {
            const { button, priceTagline } = this.props.texts;
            return (React.createElement(Footer, null,
                React.createElement(ButtonsContainer, null,
                    React.createElement(ButtonWrapper, null,
                        React.createElement(Button, { type: "primary", size: "large", onClick: () => window.location.replace(button.url), label: button.label, fullWidth: true }))),
                React.createElement(Text, { type: "p" }, priceTagline)));
        };
    }
    render() {
        return (React.createElement(CrossSellStyled, null,
            this.renderHeader(),
            this.renderBody(),
            this.renderFooter()));
    }
}
CrossSell.propTypes = {
    texts: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        cards: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string,
            alt: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
        })),
        button: PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string,
        }),
        priceTagline: PropTypes.string,
    }).isRequired,
};
//# sourceMappingURL=CrossSell.js.map