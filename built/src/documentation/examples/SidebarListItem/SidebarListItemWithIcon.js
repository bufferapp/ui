import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
import { Warning } from '@bufferapp/ui/Icon';
export default function ExampleSidebarListItem() {
    return (React.createElement(SidebarListItem, { id: "1a", title: "Label Default", onItemClick: () => console.info('hey'), badges: 123, badgeIcon: React.createElement(Warning, null) }));
}
//# sourceMappingURL=SidebarListItemWithIcon.js.map