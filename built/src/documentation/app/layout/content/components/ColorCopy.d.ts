import React from 'react';
import PropTypes from 'prop-types';
declare const ColorCopy: {
    ({ color, name, width, height }: {
        color: any;
        name: any;
        width: any;
        height: any;
    }): React.JSX.Element;
    defaultProps: {
        width: string;
        height: string;
    };
    propTypes: {
        color: PropTypes.Validator<string>;
        name: PropTypes.Validator<string>;
        width: PropTypes.Requireable<string>;
        height: PropTypes.Requireable<string>;
    };
};
export default ColorCopy;
//# sourceMappingURL=ColorCopy.d.ts.map