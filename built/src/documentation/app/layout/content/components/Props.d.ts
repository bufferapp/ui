import React from 'react';
import PropTypes from 'prop-types';
declare const Props: {
    ({ props }: {
        props: any;
    }): React.JSX.Element;
    propTypes: {
        props: PropTypes.Validator<PropTypes.InferProps<{
            description: PropTypes.Requireable<string>;
            type: PropTypes.Requireable<PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
            }>>;
            defaultValue: PropTypes.Requireable<PropTypes.InferProps<{
                value: PropTypes.Requireable<string>;
            }>>;
            required: PropTypes.Requireable<boolean>;
        }>>;
    };
};
export default Props;
//# sourceMappingURL=Props.d.ts.map