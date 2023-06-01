import React from 'react';
import Select from '@bufferapp/ui/Select';
import { Person, People, Gear, ArrowLeft } from '@bufferapp/ui/Icon';
import { NavBarMenu } from '@bufferapp/ui/NavBar';
export default function ExampleSelectMenu() {
    return (React.createElement(Select, { onSelectClick: (selectedItem) => selectedItem.selectedItemClick(), customButton: (onButtonClick) => (React.createElement(NavBarMenu, { user: {
                name: 'Courtney Seiter',
                email: 'courtney@buffer.com',
            }, onClick: onButtonClick })), items: [
            {
                id: '1',
                title: 'Account',
                icon: React.createElement(Person, { color: "gray" }),
                selectedItemClick: () => console.info('Account Clicked'),
            },
            {
                id: '2',
                title: 'Organization',
                icon: React.createElement(People, { color: "gray" }),
                selectedItemClick: () => console.info('Organization Clicked'),
            },
            {
                id: '3',
                title: 'Settings',
                icon: React.createElement(Gear, { color: "gray" }),
                selectedItemClick: () => console.info('Settings Clicked'),
            },
            {
                id: '4',
                title: 'Logout',
                icon: React.createElement(ArrowLeft, { color: "gray" }),
                hasDivider: true,
                selectedItemClick: () => console.info('Logout Clicked'),
            },
            {
                id: '5',
                title: 'Logout',
                icon: React.createElement(ArrowLeft, { color: "gray" }),
                hasDivider: true,
                dividerTitle: 'Logout',
                selectedItemClick: () => console.info('Logout Clicked'),
            },
        ], marginTop: "32px", hideSearch: true }));
}
//# sourceMappingURL=SelectWithMenuAndCustomItem.js.map