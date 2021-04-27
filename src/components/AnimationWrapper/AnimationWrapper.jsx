import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { easeOutQuart } from '../style/animations';

const AnimationContainer = styled.div`
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
  duration,
  easing,
  justify,
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
      align={align}
      duration={duration}
      easing={easing}
      justify={justify}
      stageInAnimation={stageInAnimation}
      stageOutAnimation={stageOutAnimation}
      className={hasChanged ? 'fadeOut' : 'fadeIn'}
    >
      {content}
    </AnimationContainer>
  );
};

AnimationWrapper.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  justify: PropTypes.string,
  easing: PropTypes.func,
  stageInAnimation: PropTypes.func.isRequired,
  stageOutAnimation: PropTypes.func.isRequired,
};

AnimationWrapper.defaultProps = {
  align: 'center',
  duration: 300,
  justify: 'center',
  easing: easeOutQuart,
};


export default AnimationWrapper;
