import React from 'react';
import Button from '@bufferapp/ui/Button';
import UISelect from '@bufferapp/ui/Select';
class Select extends UISelect {
    constructor() {
        super(...arguments);
        this.handleSelectOption = (option, event) => {
            this.props.onSelectClick(option, event);
            this.setState({
                isOpen: false,
            });
        };
    }
}
export default function ExampleSplitButtonWithCustomSelect() {
    return (React.createElement(Button, { onClick: () => true, type: "primary", isSplit: true, label: "Click Me" },
        React.createElement(Select, { onSelectClick: () => true, items: [
                { id: '1', title: 'Reply + Pending' },
                { id: '2', title: 'Reply + Close + Assign To Me' },
            ], type: "primary", isSplit: true, xPosition: "right", hideSearch: true })));
}
//# sourceMappingURL=TypeSplitButtonWithCustomSelect.js.map