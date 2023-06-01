import PropTypes from 'prop-types';
declare const Component: {
    ({ component, fullscreen }: {
        component: any;
        fullscreen: any;
    }): any;
    propTypes: {
        fullscreen: PropTypes.Requireable<boolean>;
        component: PropTypes.Validator<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            description: PropTypes.Validator<string>;
            code: PropTypes.Validator<string>;
            level: PropTypes.Validator<number>;
        }>>;
    };
    defaultProps: {
        fullscreen: boolean;
    };
};
export default Component;
//# sourceMappingURL=Component.d.ts.map