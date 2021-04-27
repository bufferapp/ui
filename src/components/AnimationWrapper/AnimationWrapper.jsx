import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { easeOutQuart } from '../style/animations';

const AnimationContainer = styled.div`
  animation-fill-mode: forwards;
  display: flex;
  align-items: ${({ align }) => align}}
  justify-content: ${({ justify }) => justify}}
  outline: none;
  width: 100%;

  &.fadeIn {
    animation: ${({ duration }) => `${duration}ms`} ${({ stageInAnimation }) => stageInAnimation} ${({ easing }) => easing};
  }

  &.fadeOut {
    animation: ${({ duration }) => `${duration}ms`} ${({ stageOutAnimation }) => stageOutAnimation} ${({ easing }) => easing};
  }
`;

const AnimationWrapper = ({
  align,
  children,
  dismissing,
  duration,
  easing,
  justify,
  stageInAnimation,
  stageOutAnimation,
  onDismiss,
}) => {
  const [content, setContent] = useState(children);
  const [hasChanged, setHasChanged] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (children !== content && !dismissing) {
      setHasChanged(true);
      setTimeout(() => {
        setContent(children);
        setHasChanged(false);
      }, duration)
    }
  }, [children])

  useEffect(() => {
    if (dismissing) {
      // we are dismissing a bit earlier then animation end to prevent accidental re-render
      setTimeout(() => {
        setDismissed(true);
        onDismiss();
      }, duration - 10)
    } }, [dismissing])

  let className = 'fadeIn';
  if (hasChanged || dismissing) {
    className = 'fadeOut'
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
  );
};

AnimationWrapper.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  dismissing: PropTypes.bool,
  duration: PropTypes.number,
  justify: PropTypes.string,
  easing: PropTypes.func,
  stageInAnimation: PropTypes.func.isRequired,
  stageOutAnimation: PropTypes.func.isRequired,
  onDismiss: PropTypes.func,
};

AnimationWrapper.defaultProps = {
  align: 'center',
  dismissing: false,
  duration: 300,
  justify: 'center',
  easing: easeOutQuart,
  onDismiss: () => {},
};


export default AnimationWrapper;
