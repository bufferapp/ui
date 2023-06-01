import React from 'react';
import Button from '@bufferapp/ui/Button';
import styled from 'styled-components';
const Wrapper = styled.div `
  display: flex;
  column-gap: 16px;
`;
export default function ExampleDisabled() {
    return (React.createElement(Wrapper, null,
        React.createElement(Button, { type: "primary", disabled: true, onClick: () => { }, label: "Click Me" }),
        React.createElement(Button, { type: "secondary", disabled: true, onClick: () => { }, label: "Click Me" }),
        React.createElement(Button, { onSelectClick: () => true, onClick: () => true, type: "secondary", disabled: true, isSplit: true, items: [
                { id: '1', title: 'Save as Draft' },
                { id: '2', title: 'Save as Post' },
            ], label: "Click Me" })));
}
//# sourceMappingURL=StateDisabled.js.map