declare function useAnimation(props: any): {
    AnimationWrapper: {
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
        }): import("react").JSX.Element;
        propTypes: {
            align: import("prop-types").Requireable<string>;
            children: import("prop-types").Validator<string | number | boolean | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
            dismissing: import("prop-types").Requireable<boolean>;
            duration: import("prop-types").Requireable<number>;
            justify: import("prop-types").Requireable<string>;
            easing: import("prop-types").Requireable<string>;
            stageInAnimation: import("prop-types").Validator<import("prop-types").InferProps<{}>>;
            stageOutAnimation: import("prop-types").Validator<import("prop-types").InferProps<{}>>;
            onDismiss: import("prop-types").Requireable<(...args: any[]) => any>;
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
    animationProps: any;
    dismiss: () => void;
};
export default useAnimation;
//# sourceMappingURL=hook.d.ts.map