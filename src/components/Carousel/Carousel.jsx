import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button/index';
import ArrowRight from '../Icon/Icons/ArrowRight';
import ArrowLeft from '../Icon/Icons/ArrowLeft';
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

const MainListItem = styled.li`
  list-style: none;
`;

// grabbed these styles from https://a11yproject.com/posts/how-to-hide-content/
const Announcement = styled.div`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
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

  moveBackward = () => {
    const { left } = this.state;
    const { width } = this.props;
    if (left === 0) {
      // if it's the first item we still want to update the currentSlideIndex so we can
      // update the aria-hidden attribute appropriately
      this.setState(prevState => ({
        currentSlideIndex:
          prevState.currentSlideIndex === 0
            ? prevState.currentSlideIndex
            : prevState.currentSlideIndex - 1,
      }));
      return;
    }
    this.setState(prevState => ({
      left: prevState.left + parseInt(width, 10),
      currentSlideIndex: prevState.currentSlideIndex - 1,
    }));
  };

  moveForward = () => {
    const { children, width } = this.props;
    if (this.verifyLastItem(children.length, width)) {
      // if it's the last item we still want to update the currentSlideIndex so we can
      // update the aria-hidden attribute appropriately
      this.setState(prevState => ({
        currentSlideIndex:
          prevState.currentSlideIndex === children.length - 1
            ? prevState.currentSlideIndex
            : prevState.currentSlideIndex + 1,
      }));
      return;
    }

    this.setState(prevState => ({
      left: prevState.left - parseInt(width, 10),
      currentSlideIndex: prevState.currentSlideIndex + 1,
    }));
  };

  verifyLastItem = (lengthOfChildren, widthOfEachItem) => {
    const { left } = this.state;
    const finalLength = (lengthOfChildren - 1) * parseInt(widthOfEachItem, 10);

    return left === -finalLength;
  };

  renderItems = () => {
    const { currentSlideIndex } = this.state;
    const { children } = this.props;
    const items = children.map((child, index) => (
      <MainListItem key={index} aria-hidden={currentSlideIndex !== index}>
        {child}
      </MainListItem>
    ));

    return items;
  };

  renderAnnouncement = () => {
    const { currentSlideIndex } = this.state;
    const { children } = this.props;
    const content = (
      <Announcement aria-live="polite" aria-atomic="true" tabIndex={-1}>
        Slide
        {currentSlideIndex + 1}
        out of
        {children.length}
      </Announcement>
    );

    return content;
  };

  goToSlide = index => {
    const { width } = this.props;
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
        {this.renderAnnouncement()}
        <ButtonOverlapContainer left>
          <Button
            type="secondary"
            icon={<ArrowLeft />}
            hasIconOnly
            onClick={() => {
              this.moveBackward();
            }}
            label="Backwards"
          />
        </ButtonOverlapContainer>
        <Content>
          <Window width={width}>
            <MainList left={left}>{this.renderItems()}</MainList>
          </Window>
          <IndicatorList>
            {children.map((child, index) => (
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
              this.moveForward();
            }}
            label="Forwards"
          />
        </ButtonOverlapContainer>
      </CarouselStyled>
    );
  }
}

Carousel.defaultProps = {
  children: [],
  width: '200px',
};

Carousel.propTypes = {
  /** The content within the carousel */
  children: PropTypes.array.isRequired,

  /** The normalized width for each item */
  width: PropTypes.string.isRequired,
};

export default Carousel;
