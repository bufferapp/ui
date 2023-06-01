import React from 'react';
import PropTypes from 'prop-types';
declare const NavBarProducts: {
    ({ products, activeProduct }: {
        products: any;
        activeProduct: any;
    }): React.JSX.Element;
    propTypes: {
        products: PropTypes.Requireable<(PropTypes.InferProps<{
            id: PropTypes.Requireable<string>;
            isNew: PropTypes.Requireable<boolean>;
            href: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        activeProduct: PropTypes.Requireable<string>;
    };
    defaultProps: {
        products: never[];
        activeProduct: undefined;
    };
};
export default NavBarProducts;
//# sourceMappingURL=NavBarProducts.d.ts.map