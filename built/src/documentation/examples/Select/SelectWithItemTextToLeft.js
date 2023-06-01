import React from 'react';
import Select from '@bufferapp/ui/Select';
export default function ExampleSelect() {
    return (React.createElement("div", { style: { width: '300px' } },
        React.createElement(Select, { hideSearch: true, textToLeft: true, onSelectClick: () => true, fullWidth: true, label: "Click me", type: "primary", items: [
                { id: '1', title: 'With a very very long text' },
                { id: '2', title: 'Short text' },
            ] })));
}
//# sourceMappingURL=SelectWithItemTextToLeft.js.map