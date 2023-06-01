import { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
function useAnimation(props) {
    const [dismissing, setDismissing] = useState(false);
    const animationProps = Object.assign(Object.assign({}, props), { dismissing });
    return {
        AnimationWrapper,
        animationProps,
        dismiss: () => setDismissing(true),
    };
}
export default useAnimation;
//# sourceMappingURL=hook.js.map