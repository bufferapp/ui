import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { easeOutQuart } from '../style/animations';

const AnimationContainer = styled.div`
  animation-fill-mode: forwards;
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  outline: none;
  width: 100%;

  ${({ disableAnimation }) =>
    !disableAnimation &&
    css`
      &.stageIn {
        animation: ${({ duration }) => `${duration}ms`}
          ${({ stageInAnimation }) => stageInAnimation}
          ${({ easing }) => easing};
      }

      &.stageOut {
        animation: ${({ duration }) => `${duration}ms`}
          ${({ stageOutAnimation }) => stageOutAnimation}
          ${({ easing }) => easing};
      }
    `}

  @media (prefers-reduced-motion) {
    &.stageIn,
    &.stageOut {
      animation-name: dissolve;
    }
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
  disableAnimation,
}) => {
  const [content, setContent] = useState(children);
  const [hasChanged, setHasChanged] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [animationLocked, setAnimationLocked] = useState(false);
  const [className, setClassName] = useState('stageIn');
  const shouldUpdate = children !== content && !dismissing;

  function lockAnimationDuringStaging() {
    setAnimationLocked(true);
    setTimeout(() => {
      setAnimationLocked(false);
    }, duration * 2);
  }

  function stageIn() {
    setClassName('stageIn');
  }

  function stageOut() {
    setClassName('stageOut');
  }

  useEffect(() => {
    if (shouldUpdate) {
      setHasChanged(true);
      setTimeout(() => {
        stageIn();
        setContent(children);
        setHasChanged(false);
      }, duration);
    }
  }, [children]);

  useEffect(() => {
    if (dismissing) {
      // we are dismissing a bit earlier then animation end to prevent accidental re-render
      setTimeout(() => {
        setDismissed(true);
        onDismiss();
      }, duration - 10);
    }
  }, [dismissing]);

  useEffect(() => {
    lockAnimationDuringStaging();
  }, []);

  if (!animationLocked && (hasChanged || dismissing)) {
    stageOut();
    lockAnimationDuringStaging();
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
      disableAnimation={disableAnimation}
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
  easing: PropTypes.string,
  stageInAnimation: PropTypes.shape({}).isRequired,
  stageOutAnimation: PropTypes.shape({}).isRequired,
  onDismiss: PropTypes.func,
  disableAnimation: PropTypes.bool,
};

AnimationWrapper.defaultProps = {
  align: 'center',
  dismissing: false,
  duration: 300,
  justify: 'center',
  easing: easeOutQuart,
  disableAnimation: true,
  onDismiss: () => {},
};

export default AnimationWrapper;
