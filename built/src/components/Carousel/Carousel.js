import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button/index';
import ArrowRight from '../Icon/Icons/ArrowRight';
import ArrowLeft from '../Icon/Icons/ArrowLeft';
import CarouselItems from './CarouselItems';
import { gray, white } from '../style/colors';
import { easeOutQuart } from '../style/animations';
const CarouselStyled = styled.div `
  align-items: center;
  display: flex;
`;
const Window = styled.div `
  overflow: hidden;
  width: ${(props) => props.width};
  margin: 8px;
  display: flex;
`;
const ButtonOverlapContainer = styled.div `
  position: relative;
  z-index: 3;

  ${(props) => props.left
    ? css `
          left: 20px;
        `
    : css `
          right: 20px;
        `}
`;
const MainList = styled.ul `
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  left: ${(props) => `${props.left}px`};
  transition: left 0.4s ${easeOutQuart};
`;
const Announcement = styled.div `
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip-path: inset(1px 1px 1px 1px);
  white-space: nowrap; /* added line */
  margin: 0;
`;
const IndicatorList = styled.ol `
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;
const IndicatorListItem = styled.li `
  list-style: none;
  padding: 0 4px;
  position: relative;
  display: flex;
`;
const IndicatorButton = styled.button `
  width: 11px;
  height: 11px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${gray};

  :hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${white};
    position: absolute;
    top: 0;
    left: 4px;
    transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
    transition: transform ${({ active }) => (active ? '250ms' : '150ms')}
      ease-out;
  }

  &:before {
    content: '';
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid ${white};
    position: absolute;
    top: 0;
    left: 2px;
    opacity: 0;
    transition: opacity 100ms ease-out;
    transition-delay: ${({ active }) => (active ? '0' : '150ms')};
  }

  &:hover {
    &:after {
      transform: scale(1);
    }
    &:before {
      opacity: 1;
    }
  }
`;
const Content = styled.div `
  display: flex;
  flex-direction: column;
`;
class Carousel extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            left: 0,
            currentSlideIndex: 0,
        };
        this.verifyLastItem = (lengthOfChildren, widthOfEachItem) => {
            const { left } = this.state;
            const finalLength = (lengthOfChildren - 1) * parseInt(widthOfEachItem, 10);
            return left === -finalLength;
        };
        this.goToSlide = (index) => {
            const { width, children } = this.props;
            const { currentSlideIndex, left } = this.state;
            if (currentSlideIndex > index) {
                if (left === 0) {
                    const finalLength = (React.Children.count(children) - 1) * parseInt(width, 10);
                    this.setState({
                        left: -finalLength,
                        currentSlideIndex: React.Children.count(children) - 1,
                    });
                    return;
                }
            }
            if (currentSlideIndex < index) {
                if (this.verifyLastItem(React.Children.count(children), width)) {
                    this.setState({
                        left: 0,
                        currentSlideIndex: 0,
                    });
                    return;
                }
            }
            const newLeft = parseInt(width, 10) * index;
            this.setState({
                left: -newLeft,
                currentSlideIndex: index,
            });
        };
    }
    render() {
        const { left, currentSlideIndex } = this.state;
        const { children, width, rightNavigation, withIndicators } = this.props;
        return (React.createElement(CarouselStyled, null,
            React.createElement(Announcement, { "aria-live": "polite", "aria-atomic": "true", tabIndex: -1 },
                "Slide",
                currentSlideIndex + 1,
                "out of",
                children.length),
            React.Children.count(children) > 1 && !rightNavigation && (React.createElement(ButtonOverlapContainer, { left: true },
                React.createElement(Button, { type: "secondary", icon: React.createElement(ArrowLeft, null), hasIconOnly: true, onClick: () => {
                        this.goToSlide(currentSlideIndex - 1);
                    }, label: "Backwards" }))),
            React.createElement(Content, null,
                React.createElement(Window, { width: width },
                    React.createElement(MainList, { left: left },
                        React.createElement(CarouselItems, { currentSlideIndex: currentSlideIndex }, children))),
                React.Children.count(children) > 1 && withIndicators && (React.createElement(IndicatorList, null, React.Children.map(children, (child, index) => (React.createElement(IndicatorListItem, { key: index },
                    React.createElement(IndicatorButton, { type: "button", onClick: () => this.goToSlide(index), active: index === currentSlideIndex },
                        React.createElement(Announcement, { as: "p" }, index === currentSlideIndex
                            ? `Currently on slide
                    ${index + 1}`
                            : `Go to slide ${index + 1}`)))))))),
            React.Children.count(children) > 1 && (React.createElement(ButtonOverlapContainer, null,
                React.createElement(Button, { type: "secondary", icon: React.createElement(ArrowRight, null), hasIconOnly: true, onClick: () => {
                        this.goToSlide(currentSlideIndex + 1);
                    }, label: "Forwards" })))));
    }
}
Carousel.defaultProps = {
    rightNavigation: false,
    withIndicators: true,
};
Carousel.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string.isRequired,
    rightNavigation: PropTypes.bool,
    withIndicators: PropTypes.bool,
};
export default Carousel;
//# sourceMappingURL=Carousel.js.map