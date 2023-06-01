import React from 'react';
import PropTypes from 'prop-types';
declare const InfoCard: {
    ({ color, title, children }: {
        color: any;
        title: any;
        children: any;
    }): React.JSX.Element;
    defaultProps: {
        title: null;
        children: string;
    };
    propTypes: {
        title: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<string>;
        color: PropTypes.Validator<string>;
    };
};
export default InfoCard;
//# sourceMappingURL=InfoCard.d.ts.map