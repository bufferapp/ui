import { useState } from 'react'
import AnimationWrapper from './AnimationWrapper'

// @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
function useAnimation(props) {
  const [dismissing, setDismissing] = useState(false)
  const animationProps = { ...props, dismissing }

  return {
    AnimationWrapper,
    animationProps,
    dismiss: () => setDismissing(true),
  }
}

export default useAnimation
