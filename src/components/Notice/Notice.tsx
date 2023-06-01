import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { borderRadius } from '../style/borders'
import { fontSize } from '../style/fonts'
import Warning from '../Icon/Icons/Warning'
import Cross from '../Icon/Icons/Cross'
import Buffer from '../Icon/Icons/Buffer'
import {
  grayDark,
  grayLighter,
  grayDarker,
  redLightest,
  redDark,
  redDarker,
  purpleDark,
  purpleLightest,
  purpleDarker,
  yellowLightest,
  yellowDark,
  yellowDarker,
} from '../style/colors'
import { useAnimation } from '../AnimationWrapper'
import { stageInRight, fadeOut } from '../style/animations'

const colorMap = {
  alert: {
    border: redDark,
    background: redLightest,
    color: redDarker,
  },
  warning: {
    border: yellowDark,
    background: yellowLightest,
    color: yellowDarker,
  },
  note: {
    border: grayDark,
    background: grayLighter,
    color: grayDarker,
  },
  tip: {
    border: purpleDark,
    background: purpleLightest,
    color: purpleDarker,
  },
}

const NoticeWrapper = styled.div`
  border: ${(props) => `1px solid ${colorMap[props.type].border}`};
  color: ${(props) => colorMap[props.type].color};
  background: ${(props) => colorMap[props.type].background};
  border-radius: ${borderRadius};
  font-size: ${fontSize};
  padding: 8px ${({ dismiss }) => (dismiss ? '28px' : '8px')} 8px 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
`

const WarningIcon = styled(Warning)`
  display: block;
  margin-right: 12px;
  flex: 1 0 auto;
  max-width: 16px;
`

const BufferIcon = styled(Buffer)`
  display: block;
  margin-right: 12px;
  flex: 1 0 auto;
  max-width: 16px;
`

const CloseButton = styled.button`
  color: ${(props) => colorMap[props.type].color};
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  opacity: 0.8;
  height: 16px;
  position: absolute;
  right: 16px;
  &:hover {
    color: ${(props) => colorMap[props.type].color};
    opacity: 1;
    cursor: pointer;
  }
`

function Notice({ children, dismiss, type, className, disableAnimation }) {
  // We always need to wrap the Notice with AnimationWrapper because the dismiss function
  // shows the Notice based on the dismissed property. If the animation is disabled the properties
  // that control the animation are removed from animationProps.
  const {
    AnimationWrapper,
    dismiss: dismissAnimationWrapper,
    animationProps,
  } = useAnimation({
    justify: 'flex-end',
    stageInAnimation: disableAnimation ? undefined : stageInRight,
    stageOutAnimation: disableAnimation ? undefined : fadeOut,
    onDismiss: dismiss,
  })

  const noticeContent = (
    <NoticeWrapper type={type} dismiss={dismiss} className={className}>
      {type === 'warning' && <WarningIcon />}
      {type === 'alert' && <WarningIcon />}
      {type === 'tip' && <BufferIcon />}
      {children}
      {dismiss && (
        <CloseButton type={type} onClick={() => dismissAnimationWrapper()}>
          <Cross />
        </CloseButton>
      )}
    </NoticeWrapper>
  )

  return (
    <AnimationWrapper {...animationProps}>{noticeContent}</AnimationWrapper>
  )
}

Notice.propTypes = {
  children: PropTypes.node.isRequired,
  dismiss: PropTypes.func,
  /** doesn't use animation wrapper if true */
  disableAnimation: PropTypes.bool,
  /** can be warning, note, alert, tip */
  type: PropTypes.string.isRequired,
}

Notice.defaultProps = {
  dismiss: null,
  disableAnimation: false,
}

export default Notice
