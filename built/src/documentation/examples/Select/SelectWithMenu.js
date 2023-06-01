import React from 'react';
import Select from '@bufferapp/ui/Select';
import { NavBarMenu } from '@bufferapp/ui/NavBar';
export default function ExampleSelectMenu() {
    return (React.createElement(Select, { onSelectClick: () => console.info('Selected'), customButton: (onButtonClick) => (React.createElement(NavBarMenu, { user: {
                name: 'Courtney Seiter',
                email: 'courtney@buffer.com',
            }, onClick: onButtonClick })), items: [
            { id: '1', title: 'Option 1' },
            { id: '2', title: 'Option 2' },
            { id: '3', title: 'Option 3' },
        ], marginTop: "32px", hideSearch: true }));
}
//# sourceMappingURL=SelectWithMenu.js.map