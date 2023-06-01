import React from 'react';
import PropTypes from 'prop-types';
export declare const Label: any;
export declare const EmptyLabel: any;
declare const TooltipLabel: {
    ({ items, maxItems, defaultMessage }: {
        items: any;
        maxItems: any;
        defaultMessage: any;
    }): React.JSX.Element | null;
    propTypes: {
        items: PropTypes.Requireable<(PropTypes.InferProps<{
            title: PropTypes.Requireable<string>;
            icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        }> | null | undefined)[]>;
        defaultMessage: PropTypes.Requireable<string>;
    };
    defaultProps: {
        items: never[];
        defaultMessage: null;
    };
};
export default TooltipLabel;
//# sourceMappingURL=TooltipLabel.d.ts.map