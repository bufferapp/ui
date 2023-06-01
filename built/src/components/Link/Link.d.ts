import React from 'react';
import PropTypes from 'prop-types';
declare const Link: {
    ({ children, href, newTab, download, className, title, fontWeight, }: {
        children: any;
        href: any;
        newTab: any;
        download: any;
        className: any;
        title: any;
        fontWeight: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        href: PropTypes.Validator<string>;
        newTab: PropTypes.Requireable<boolean>;
        download: PropTypes.Requireable<string | boolean>;
        className: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        fontWeight: PropTypes.Requireable<number>;
    };
    defaultProps: {
        newTab: boolean;
        download: boolean;
        className: undefined;
        title: string;
        fontWeight: number;
    };
};
export default Link;
//# sourceMappingURL=Link.d.ts.map