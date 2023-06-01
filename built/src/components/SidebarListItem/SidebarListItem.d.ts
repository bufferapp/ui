import React from 'react';
import PropTypes from 'prop-types';
declare const SidebarListItem: {
    ({ title, icon, onItemClick, badges, badgeIcon, selected, user, className, }: {
        title: any;
        icon: any;
        onItemClick: any;
        badges: any;
        badgeIcon: any;
        selected: any;
        user: any;
        className: any;
    }): React.JSX.Element;
    propTypes: {
        id: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        title: PropTypes.Validator<string>;
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onItemClick: PropTypes.Validator<(...args: any[]) => any>;
        badges: PropTypes.Requireable<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        badgeIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        selected: PropTypes.Requireable<boolean>;
        user: PropTypes.Requireable<PropTypes.InferProps<{
            id: PropTypes.Requireable<string>;
            name: PropTypes.Requireable<string>;
            handle: PropTypes.Requireable<string>;
            profileImageUrl: PropTypes.Requireable<string>;
            fallbackUrl: PropTypes.Requireable<string>;
            network: PropTypes.Requireable<string>;
        }>>;
    };
    defaultProps: {
        id: string;
        icon: null;
        badgeIcon: null;
        badges: null;
        selected: null;
        user: null;
        className: null;
    };
};
export default SidebarListItem;
//# sourceMappingURL=SidebarListItem.d.ts.map