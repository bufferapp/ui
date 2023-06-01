import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
import { Person } from '@bufferapp/ui/Icon';
export default function ExampleSidebarListItem() {
    return (React.createElement(SidebarListItem, { id: "1a", title: "Label Default", icon: React.createElement(Person, null), onItemClick: () => console.info('hey'), badges: 123 }));
}
//# sourceMappingURL=SidebarListItem.js.map