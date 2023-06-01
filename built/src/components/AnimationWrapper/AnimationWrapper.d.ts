import React from 'react';
import PropTypes from 'prop-types';
declare const AnimationWrapper: {
    ({ align, children, dismissing, duration, easing, justify, stageInAnimation, stageOutAnimation, onDismiss, }: {
        align: any;
        children: any;
        dismissing: any;
        duration: any;
        easing: any;
        justify: any;
        stageInAnimation: any;
        stageOutAnimation: any;
        onDismiss: any;
    }): React.JSX.Element;
    propTypes: {
        align: PropTypes.Requireable<string>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        dismissing: PropTypes.Requireable<boolean>;
        duration: PropTypes.Requireable<number>;
        justify: PropTypes.Requireable<string>;
        easing: PropTypes.Requireable<string>;
        stageInAnimation: PropTypes.Validator<PropTypes.InferProps<{}>>;
        stageOutAnimation: PropTypes.Validator<PropTypes.InferProps<{}>>;
        onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        align: string;
        dismissing: boolean;
        duration: number;
        justify: string;
        easing: string;
        onDismiss: () => void;
    };
};
export default AnimationWrapper;
//# sourceMappingURL=AnimationWrapper.d.ts.map