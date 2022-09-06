import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from '../style/borders';
import { fontSize } from '../style/fonts';
import Warning from '../Icons/Warning';
import Cross from '../Icons/Cross';
import { grayDark, grayLighter, grayDarker } from '../style/colors';
import { useAnimation } from '../AnimationWrapper';
import { stageInRight, fadeOut } from '../style/animations';

const colorMap = {
  warning: {
    border: '#a59638',
    background: '#fdf8d8',
    color: '#625920',
  },
  note: {
    border: grayDark,
    background: grayLighter,
    color: grayDarker,
  },
};

const NoticeWrapper = styled.div`
  border: ${props => `1px solid ${colorMap[props.type].border}`};
  color: ${props => colorMap[props.type].color};
  background: ${props => colorMap[props.type].background};
  border-radius: ${borderRadius};
  font-size: ${fontSize};
  padding: 16px ${({ dismiss }) => dismiss ? '36px' : '16px' } 16px 16px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`;

const WarningIcon = styled(Warning)`
  display: block;
  margin-right: 12px;
  flex: 1 0 auto;
  max-width: 16px;
`;

const CloseButton = styled.button`
  color: ${props => colorMap[props.type].color};
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  opacity: 0.8;
  height: 16px;
  position: absolute;
  right: 16px;
  &:hover {
    color: ${props => colorMap[props.type].color};
    opacity: 1;
    cursor: pointer;
  }
`;

function Notice({ children, dismiss, type, className, disableAnimation }) {
  const { AnimationWrapper, dismiss:dismissAnimationWrapper, animationProps } = useAnimation({
    justify: 'flex-end',
    stageInAnimation: stageInRight,
    stageOutAnimation: fadeOut,
    onDismiss: dismiss,
  })

  const noticeContent = (
    <NoticeWrapper type={type} dismiss={dismiss} className={className}>
      {type === 'warning' && <WarningIcon />}
      {children}
      {dismiss && (
        <CloseButton type={type} onClick={() => dismissAnimationWrapper()}>
          <Cross />
        </CloseButton>
      )}
    </NoticeWrapper>
  );

  if (!disableAnimation) {
    return <AnimationWrapper {...animationProps}>{noticeContent}</AnimationWrapper>;
  }

  return <div>{noticeContent}</div>;
}

Notice.propTypes = {
  children: PropTypes.node.isRequired,
  dismiss: PropTypes.func,
  /** doesn't use animation wrapper if true */
  disableAnimation: PropTypes.bool,
  /** can be warning, note */
  type: PropTypes.string.isRequired,
};

Notice.defaultProps = {
  dismiss: null,
  disableAnimation: false
};

export default Notice;