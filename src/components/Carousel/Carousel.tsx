import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Button from '../Button/index'
import ArrowRight from '../Icon/Icons/ArrowRight'
import ArrowLeft from '../Icon/Icons/ArrowLeft'
import CarouselItems from './CarouselItems'
import { gray, white } from '../style/colors'
import { easeOutQuart } from '../style/animations'

const CarouselStyled = styled.div`
  align-items: center;
  display: flex;
`

const Window = styled.div`
  overflow: hidden;
  width: ${(props): string => props.  
// @ts-expect-error TS(2339) FIXME: Property 'width' does not exist on type 'ThemedSty... Remove this comment to see the full error message
width};
  margin: 8px;
  display: flex;
`

const ButtonOverlapContainer = styled.div`
  position: relative;
  z-index: 3;

  ${(props) =>
    // @ts-expect-error TS(2339) FIXME: Property 'left' does not exist on type 'ThemedStyl... Remove this comment to see the full error message
    props.left
      ? css`
          left: 20px;
        `
      : css`
          right: 20px;
        `}
`

const MainList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  left: ${(props): string => `${props.  
// @ts-expect-error TS(2339) FIXME: Property 'left' does not exist on type 'ThemedStyl... Remove this comment to see the full error message
left}px`};
  transition: left 0.4s ${easeOutQuart};
`

// grabbed these styles from https://a11yproject.com/posts/how-to-hide-content/
const Announcement = styled.div`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip-path: inset(1px 1px 1px 1px);
  white-space: nowrap; /* added line */
  margin: 0;
`

const IndicatorList = styled.ol`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`

const IndicatorListItem = styled.li`
  list-style: none;
  padding: 0 4px;
  position: relative;
  display: flex;
`

const IndicatorButton = styled.button`
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
    transform: ${({    
// @ts-expect-error TS(2339) FIXME: Property 'active' does not exist on type 'Omit<Det... Remove this comment to see the full error message
 active }): string => (active ? 'scale(1)' : 'scale(0)')};
    transition: transform
      ${({      
// @ts-expect-error TS(2339) FIXME: Property 'active' does not exist on type 'Omit<Det... Remove this comment to see the full error message
 active }): string => (active ? '250ms' : '150ms')} ease-out;
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
    transition-delay: ${({    
// @ts-expect-error TS(2339) FIXME: Property 'active' does not exist on type 'Omit<Det... Remove this comment to see the full error message
 active }): string => (active ? '0' : '150ms')};
  }

  &:hover {
    &:after {
      transform: scale(1);
    }
    &:before {
      opacity: 1;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

class Carousel extends React.Component {
  state = {
    left: 0,
    currentSlideIndex: 0,
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'lengthOfChildren' implicitly has an 'an... Remove this comment to see the full error message
  verifyLastItem = (lengthOfChildren, widthOfEachItem) => {
    const { left } = this.state
    const finalLength = (lengthOfChildren - 1) * parseInt(widthOfEachItem, 10)

    return left === -finalLength
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
  goToSlide = (index) => {
    // @ts-expect-error TS(2339) FIXME: Property 'width' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { width, children } = this.props
    const { currentSlideIndex, left } = this.state

    // going backwards
    if (currentSlideIndex > index) {
      // if it's the first slide, loop back to the last one
      if (left === 0) {
        const finalLength =
          (React.Children.count(children) - 1) * parseInt(width, 10)
        this.setState({
          left: -finalLength,
          currentSlideIndex: React.Children.count(children) - 1,
        })
        return
      }
    }

    // going forwards
    if (currentSlideIndex < index) {
      // if it's the last slide, loop back to the first one
      if (this.verifyLastItem(React.Children.count(children), width)) {
        this.setState({
          left: 0,
          currentSlideIndex: 0,
        })
        return
      }
    }

    const newLeft = parseInt(width, 10) * index
    this.setState({
      left: -newLeft,
      currentSlideIndex: index,
    })
  }

  render() {
    const { left, currentSlideIndex } = this.state
    // @ts-expect-error TS(2339) FIXME: Property 'width' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { children, width, rightNavigation, withIndicators } = this.props

    return (
      <CarouselStyled>
        {/* this announcement is hidden but notifies screen reader users when the slide has changed */}
        <Announcement aria-live="polite" aria-atomic="true" tabIndex={-1}>
          Slide
          {currentSlideIndex + 1}
          out of
          {/* @ts-expect-error TS(2533) FIXME: Object is possibly 'null' or 'undefined'. */}
          {children.length}
        </Announcement>
        {React.Children.count(children) > 1 && !rightNavigation && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <ButtonOverlapContainer left>
            {/* @ts-expect-error TS(2740) FIXME: Type '{ type: string; icon: Element; hasIconOnly: ... Remove this comment to see the full error message */}
            <Button
              type="secondary"
              icon={<ArrowLeft />}
              hasIconOnly
              onClick={() => {
                this.goToSlide(currentSlideIndex - 1)
              }}
              label="Backwards"
            />
          </ButtonOverlapContainer>
        )}
        <Content>
          {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
          <Window width={width}>
            {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
            <MainList left={left}>
              <CarouselItems currentSlideIndex={currentSlideIndex}>
                {/* @ts-expect-error TS(2322) FIXME: Type 'ReactNode' is not assignable to type 'string... Remove this comment to see the full error message */}
                {children}
              </CarouselItems>
            </MainList>
          </Window>
          {React.Children.count(children) > 1 && withIndicators && (
            <IndicatorList>
              {React.Children.map(children, (child, index) => (
                <IndicatorListItem key={index}>
                  <IndicatorButton
                    type="button"
                    onClick={() => this.goToSlide(index)}
                    // @ts-expect-error TS(2769) FIXME: No overload matches this call.
                    active={index === currentSlideIndex}
                  >
                    <Announcement as="p">
                      {index === currentSlideIndex
                        ? `Currently on slide
                    ${index + 1}`
                        : `Go to slide ${index + 1}`}
                    </Announcement>
                  </IndicatorButton>
                </IndicatorListItem>
              ))}
            </IndicatorList>
          )}
        </Content>
        {React.Children.count(children) > 1 && (
          <ButtonOverlapContainer>
            {/* @ts-expect-error TS(2740) FIXME: Type '{ type: string; icon: Element; hasIconOnly: ... Remove this comment to see the full error message */}
            <Button
              type="secondary"
              icon={<ArrowRight />}
              hasIconOnly
              onClick={() => {
                this.goToSlide(currentSlideIndex + 1)
              }}
              label="Forwards"
            />
          </ButtonOverlapContainer>
        )}
      </CarouselStyled>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Carousel.defaultProps = {
  rightNavigation: false,
  withIndicators: true,
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Carousel.propTypes = {
  /** The content within the carousel */
  children: PropTypes.node.isRequired,

  /** The normalized width for each item */
  width: PropTypes.string.isRequired,

  /** Option to only navigate towards the right */
  rightNavigation: PropTypes.bool,

  /** Show indicators at the bottom */
  withIndicators: PropTypes.bool,
}

export default Carousel
