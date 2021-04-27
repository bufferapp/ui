import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { easeOutQuart } from '../style/animations';

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  &.fadeIn {
    animation: ${({ duration }) => `${duration}ms`} ${({ stageInAnimation }) => stageInAnimation} ${({ easing }) => easing};
  }

  &.fadeOut {
    animation: ${({ duration }) => `${duration}ms`} ${({ stageOutAnimation }) => stageOutAnimation} ${({ easing }) => easing};
  }
`;

const AnimationWrapper = ({
  children,
  duration,
  easing,
  stageInAnimation,
  stageOutAnimation
}) => {
  const [content, setContent] = useState(children);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (children !== content) {
      setHasChanged(true);
    }
    setTimeout(() => {
      setContent(children);
      setHasChanged(false);
    }, 300)
  }, [children])

  return (
    <AnimationContainer
      duration={duration}
      easing={easing}
      stageInAnimation={stageInAnimation}
      stageOutAnimation={stageOutAnimation}
      className={hasChanged ? 'fadeOut' : 'fadeIn'}
    >
      {content}
    </AnimationContainer>
  );
};

AnimationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  easing: PropTypes.func,
  stageInAnimation: PropTypes.func.isRequired,
  stageOutAnimation: PropTypes.func.isRequired,
};

AnimationWrapper.defaultProps = {
  duration: 300,
  easing: easeOutQuart,
};


export default AnimationWrapper;
