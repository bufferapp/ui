import React from 'react';
import PropTypes from 'prop-types';
export declare function getUserAvatar(user: any): any;
declare const NavBarMenu: {
    (props: any): React.JSX.Element;
    propTypes: {
        user: PropTypes.Validator<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            email: PropTypes.Validator<string>;
        }>>;
        isImpersonation: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        isImpersonation: boolean;
    };
};
export default NavBarMenu;
//# sourceMappingURL=NavBarMenu.d.ts.map