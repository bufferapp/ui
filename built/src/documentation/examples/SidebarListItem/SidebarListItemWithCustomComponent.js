import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
export default function ExampleSidebarListItem() {
    return (React.createElement(SidebarListItem, { id: "1a", title: "Label Default", icon: (React.createElement("div", { style: {
                background: 'red',
                width: '16px',
                height: '16px',
                borderRadius: '4px',
            } })), onItemClick: () => console.info('hey'), badges: 123 }));
}
//# sourceMappingURL=SidebarListItemWithCustomComponent.js.map