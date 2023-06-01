import React from 'react';
import PropTypes from 'prop-types';
declare function Notice({ children, dismiss, type, className, disableAnimation }: {
    children: any;
    dismiss: any;
    type: any;
    className: any;
    disableAnimation: any;
}): React.JSX.Element;
declare namespace Notice {
    var propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        dismiss: PropTypes.Requireable<(...args: any[]) => any>;
        disableAnimation: PropTypes.Requireable<boolean>;
        type: PropTypes.Validator<string>;
    };
    var defaultProps: {
        dismiss: null;
        disableAnimation: boolean;
    };
}
export default Notice;
//# sourceMappingURL=Notice.d.ts.map