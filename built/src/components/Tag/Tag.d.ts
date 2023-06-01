import React from 'react';
import PropTypes from 'prop-types';
declare const Tag: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        color: PropTypes.Requireable<string>;
        textColor: PropTypes.Requireable<string>;
    };
    defaultProps: {
        color: string;
        textColor: string;
    };
};
export default Tag;
//# sourceMappingURL=Tag.d.ts.map