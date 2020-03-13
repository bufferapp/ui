import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button/index';
import ArrowRight from '../Icon/Icons/ArrowRight';
import ArrowLeft from '../Icon/Icons/ArrowLeft';
import CarouselItems from './CarouselItems';
import { gray, white } from '../style/colors';

const CarouselStyled = styled.div`
  align-items: center;
  display: flex;
`;

const Window = styled.div`
  overflow: hidden;
  width: ${props => props.width};
  margin: 8px;
  display: flex;
`;

const ButtonOverlapContainer = styled.div`
  position: relative;
  z-index: 3;

  ${props =>
    props.left
      ? css`
          left: 20px;
        `
      : css`
          right: 20px;
        `}
`;

const MainList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  left: ${props => `${props.left}px`};
  transition: left 0.5s ease-in;
`;

// grabbed these styles from https://a11yproject.com/posts/how-to-hide-content/
const Announcement = styled.div`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`;

const IndicatorList = styled.ol`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const IndicatorListItem = styled.li`
  list-style: none;
  padding: 0 4px;
`;

const IndicatorButton = styled.button`
  width: 13px;
  height: 13px;
  border: none;
  border-radius: 50%;
  background-color: ${props => (props.active ? white : gray)};

  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

class Carousel extends React.Component {
  state = {
    left: 0,
    currentSlideIndex: 0,
  };

  verifyLastItem = (lengthOfChildren, widthOfEachItem) => {
    const { left } = this.state;
    const finalLength = (lengthOfChildren - 1) * parseInt(widthOfEachItem, 10);

    return left === -finalLength;
  };

  goToSlide = index => {
    const { width, children } = this.props;
    const { currentSlideIndex, left } = this.state;

    // going backwards
    if (currentSlideIndex > index) {
      if (left === 0) return;
    }

    // going forwards
    if (currentSlideIndex < index) {
      if (this.verifyLastItem(React.Children.count(children), width)) return;
    }

    const newLeft = parseInt(width, 10) * index;
    this.setState({
      left: -newLeft,
      currentSlideIndex: index,
    });
  };

  render() {
    const { left, currentSlideIndex } = this.state;
    const { children, width } = this.props;
    return (
      <CarouselStyled>
        {/* this announcement is hidden but notifies screen reader users when the slide has changed */}
        <Announcement aria-live="polite" aria-atomic="true" tabIndex={-1}>
          Slide
          {currentSlideIndex + 1}
          out of
          {children.length}
        </Announcement>
        <ButtonOverlapContainer left>
          <Button
            type="secondary"
            icon={<ArrowLeft />}
            hasIconOnly
            onClick={() => {
              this.goToSlide(currentSlideIndex - 1);
            }}
            label="Backwards"
          />
        </ButtonOverlapContainer>
        <Content>
          <Window width={width}>
            <MainList left={left}>
              <CarouselItems currentSlideIndex={currentSlideIndex}>
                {children}
              </CarouselItems>
            </MainList>
          </Window>
          <IndicatorList>
            {React.Children.map(children, (child, index) => (
              <IndicatorListItem key={index}>
                <IndicatorButton
                  type="button"
                  onClick={() => this.goToSlide(index)}
                  active={index === currentSlideIndex}
                />
              </IndicatorListItem>
            ))}
          </IndicatorList>
        </Content>
        <ButtonOverlapContainer>
          <Button
            type="secondary"
            icon={<ArrowRight />}
            hasIconOnly
            onClick={() => {
              this.goToSlide(currentSlideIndex + 1);
            }}
            label="Forwards"
          />
        </ButtonOverlapContainer>
      </CarouselStyled>
    );
  }
}

Carousel.propTypes = {
  /** The content within the carousel */
  children: PropTypes.node.isRequired,

  /** The normalized width for each item */
  width: PropTypes.string.isRequired,
};

export default Carousel;
