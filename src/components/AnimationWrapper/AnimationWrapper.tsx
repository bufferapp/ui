import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { easeOutQuart } from '../style/animations'

const AnimationContainer = styled.div`
  animation-fill-mode: forwards;
  display: flex;
  align-items: ${({ align }): string => align}}
  justify-content: ${({ justify }): string => justify}}
  outline: none;
  width: 100%;

  &.stageIn {
    animation: ${({ duration }): string => `${duration}ms`} ${({
  stageInAnimation,
}) => stageInAnimation} ${({ easing }): string => easing};
  }

  &.stageOut {
    animation: ${({ duration }): string => `${duration}ms`} ${({
  stageOutAnimation,
}) => stageOutAnimation} ${({ easing }): string => easing};
  }

  @media (prefers-reduced-motion) {
    &.stageIn,
    &.stageOut {
      animation-name: dissolve;
    }
  }
`

const AnimationWrapper = ({
  // @ts-expect-error TS(7031) FIXME: Binding element 'align' implicitly has an 'any' ty... Remove this comment to see the full error message
  align,
  // @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
  children,
  // @ts-expect-error TS(7031) FIXME: Binding element 'dismissing' implicitly has an 'an... Remove this comment to see the full error message
  dismissing,
  // @ts-expect-error TS(7031) FIXME: Binding element 'duration' implicitly has an 'any'... Remove this comment to see the full error message
  duration,
  // @ts-expect-error TS(7031) FIXME: Binding element 'easing' implicitly has an 'any' t... Remove this comment to see the full error message
  easing,
  // @ts-expect-error TS(7031) FIXME: Binding element 'justify' implicitly has an 'any' ... Remove this comment to see the full error message
  justify,
  // @ts-expect-error TS(7031) FIXME: Binding element 'stageInAnimation' implicitly has ... Remove this comment to see the full error message
  stageInAnimation,
  // @ts-expect-error TS(7031) FIXME: Binding element 'stageOutAnimation' implicitly has... Remove this comment to see the full error message
  stageOutAnimation,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onDismiss' implicitly has an 'any... Remove this comment to see the full error message
  onDismiss,
}) => {
  const [content, setContent] = useState(children)
  const [hasChanged, setHasChanged] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [animationLocked, setAnimationLocked] = useState(false)
  const [className, setClassName] = useState('stageIn')
  const shouldUpdate = children !== content && !dismissing

  function lockAnimationDuringStaging() {
    setAnimationLocked(true)
    setTimeout(() => {
      setAnimationLocked(false)
    }, duration * 2)
  }

  function stageIn() {
    setClassName('stageIn')
  }

  function stageOut() {
    setClassName('stageOut')
  }

  useEffect(() => {
    if (shouldUpdate) {
      setHasChanged(true)
      setTimeout(() => {
        stageIn()
        setContent(children)
        setHasChanged(false)
      }, duration)
    }
  }, [children])

  useEffect(() => {
    if (dismissing) {
      // we are dismissing a bit earlier then animation end to prevent accidental re-render
      setTimeout(() => {
        setDismissed(true)
        onDismiss()
      }, duration - 10)
    }
  }, [dismissing])

  useEffect(() => {
    lockAnimationDuringStaging()
  }, [])

  if (!animationLocked && (hasChanged || dismissing)) {
    stageOut()
    lockAnimationDuringStaging()
  }

  return (
    <AnimationContainer
      align={align}
      duration={duration}
      easing={easing}
      justify={justify}
      stageInAnimation={stageInAnimation}
      stageOutAnimation={stageOutAnimation}
      className={className}
    >
      {!dismissed && content}
    </AnimationContainer>
  )
}

AnimationWrapper.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  dismissing: PropTypes.bool,
  duration: PropTypes.number,
  justify: PropTypes.string,
  easing: PropTypes.string,
  stageInAnimation: PropTypes.shape({}).isRequired,
  stageOutAnimation: PropTypes.shape({}).isRequired,
  onDismiss: PropTypes.func,
}

AnimationWrapper.defaultProps = {
  align: 'center',
  dismissing: false,
  duration: 300,
  justify: 'center',
  easing: easeOutQuart,
  onDismiss: () => {},
}

export default AnimationWrapper
