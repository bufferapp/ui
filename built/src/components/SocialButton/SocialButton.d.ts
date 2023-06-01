import React from 'react';
import PropTypes from 'prop-types';
declare const SocialButton: {
    ({ disabled, channel, onClick }: {
        disabled: any;
        channel: any;
        onClick: any;
    }): React.JSX.Element;
    propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        channel: PropTypes.Validator<string>;
        onClick: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        disabled: boolean;
    };
};
export default SocialButton;
//# sourceMappingURL=SocialButton.d.ts.map