import React from 'react';
import PropTypes from 'prop-types';
declare const Avatar: {
    ({ src, alt, type, size, network, fallbackUrl }: {
        src: any;
        alt: any;
        type: any;
        size: any;
        network: any;
        fallbackUrl: any;
    }): React.JSX.Element;
    propTypes: {
        src: PropTypes.Validator<string>;
        alt: PropTypes.Validator<string>;
        fallbackUrl: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        network: PropTypes.Requireable<string>;
    };
    defaultProps: {
        type: string;
        size: string;
        fallbackUrl: string;
        network: null;
    };
};
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map