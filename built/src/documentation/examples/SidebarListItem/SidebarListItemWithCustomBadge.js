import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
export default function SidebarListItemWithCustomBadge() {
    return (React.createElement(SidebarListItem, { id: "1a", title: "My Label With Custom Badge", icon: (React.createElement("div", { style: {
                background: 'blue',
                width: '16px',
                height: '16px',
                borderRadius: '4px',
            } })), onItemClick: () => console.info('hey'), badges: (React.createElement("span", null,
            React.createElement("b", { style: { color: 'rebeccapurple' } }, "NEW"))) }));
}
//# sourceMappingURL=SidebarListItemWithCustomBadge.js.map