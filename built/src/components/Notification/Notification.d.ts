import React from 'react';
import PropTypes from 'prop-types';
declare function Notification({ text, onClose, type, action, secondaryAction }: {
    text: any;
    onClose: any;
    type: any;
    action: any;
    secondaryAction: any;
}): React.JSX.Element;
declare namespace Notification {
    var propTypes: {
        text: PropTypes.Validator<string>;
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        type: PropTypes.Requireable<string>;
        action: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            disabled: PropTypes.Requireable<boolean>;
            callback: PropTypes.Requireable<(...args: any[]) => any>;
        }>>;
        secondaryAction: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            disabled: PropTypes.Requireable<boolean>;
            callback: PropTypes.Requireable<(...args: any[]) => any>;
        }>>;
    };
    var defaultProps: {
        type: string;
        action: undefined;
        secondaryAction: undefined;
    };
}
export default Notification;
//# sourceMappingURL=Notification.d.ts.map