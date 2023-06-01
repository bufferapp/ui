import React from 'react';
import PropTypes from 'prop-types';
declare const Text: {
    ({ children, type, ...props }: {
        [x: string]: any;
        children: any;
        type: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasError: PropTypes.Requireable<boolean>;
        htmlFor: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string>;
    };
    defaultProps: {
        children: undefined;
        hasError: boolean;
        htmlFor: undefined;
        color: string;
        type: string;
    };
};
export default Text;
//# sourceMappingURL=Text.d.ts.map