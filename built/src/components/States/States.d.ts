import React from 'react';
import PropTypes from 'prop-types';
declare const States: {
    ({ children, size }: {
        children: any;
        size: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        size: PropTypes.Requireable<string>;
    };
    defaultProps: {
        size: string;
    };
    Image: {
        ({ src, alt }: {
            src: any;
            alt: any;
        }): React.JSX.Element;
        propTypes: {
            src: PropTypes.Validator<string>;
            alt: PropTypes.Validator<string>;
        };
        defaultProps: {};
    };
    Media: {
        ({ children }: {
            children: any;
        }): React.JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        };
        defaultProps: {};
    };
    Header: {
        ({ children }: {
            children: any;
        }): React.JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        };
        defaultProps: {};
    };
    Description: {
        ({ children }: {
            children: any;
        }): React.JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        };
        defaultProps: {};
    };
    Buttons: {
        ({ children }: {
            children: any;
        }): React.JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        };
        defaultProps: {};
    };
};
export default States;
//# sourceMappingURL=States.d.ts.map