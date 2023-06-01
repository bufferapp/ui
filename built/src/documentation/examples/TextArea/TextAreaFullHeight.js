import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';
import styled from 'styled-components';
const StyledDiv = styled.div `
  height: 400px;
`;
export default function ExampleTextArea() {
    return (React.createElement(StyledDiv, null,
        React.createElement(TextArea, { label: "Textarea (Full Height)", placeholder: "placeholder", onChange: () => { }, id: "example1", fullHeight: true })));
}
//# sourceMappingURL=TextAreaFullHeight.js.map