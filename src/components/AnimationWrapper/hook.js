import { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';

function useAnimation(props) {
  const [dismissing, setDismissing] = useState(false);
  const animationProps = {...props, dismissing}

  return {
    AnimationWrapper,
    animationProps,
    dismiss: () => setDismissing(true),
  }

}

export default useAnimation;
