import React from 'react';
import PropTypes from 'prop-types';
declare const SegmentedControl: {
    ({ children }: {
        children: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
    defaultProps: {};
    Option: {
        (props: any): React.JSX.Element;
        propTypes: {
            optionType: PropTypes.Validator<string>;
            size: PropTypes.Requireable<string>;
            disabled: PropTypes.Requireable<boolean>;
            icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            iconPosition: PropTypes.Requireable<string>;
            label: PropTypes.Validator<string>;
            value: PropTypes.Validator<string | number | boolean>;
            tooltip: PropTypes.Requireable<string>;
            selected: PropTypes.Validator<boolean>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
        };
        defaultProps: {
            size: string;
            disabled: boolean;
            icon: null;
            iconPosition: string;
            tooltip: string;
            onClick: () => null;
        };
    };
};
export default SegmentedControl;
//# sourceMappingURL=SegmentedControl.d.ts.map