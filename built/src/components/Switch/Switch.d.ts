import React from 'react';
import PropTypes from 'prop-types';
declare const Switch: {
    ({ label, id, disabled, handleSwitch, isOn }: {
        label: any;
        id: any;
        disabled: any;
        handleSwitch: any;
        isOn: any;
    }): React.JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
        isOn: PropTypes.Requireable<boolean>;
        id: PropTypes.Validator<string>;
        disabled: PropTypes.Requireable<boolean>;
        handleSwitch: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        disabled: boolean;
        isOn: boolean;
    };
};
export default Switch;
//# sourceMappingURL=Switch.d.ts.map