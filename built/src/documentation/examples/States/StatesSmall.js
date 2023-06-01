import React from 'react';
import States from '@bufferapp/ui/States';
import Button from '@bufferapp/ui/Button';
import styled from 'styled-components';
const Wrapper = styled.div `
  height: 426px;
  width: 480px;
  border: 1px solid black;
`;
export default function ExampleStates() {
    return (React.createElement(Wrapper, null,
        React.createElement(States, { size: "small" },
            React.createElement(States.Image, { src: "./images/illustration2.png", alt: "a colourful illustration of a buffer character" }),
            React.createElement(States.Header, null, "We are trying to tell you something"),
            React.createElement(States.Description, null, "We have something very important to tell you that you should know about and we would like to kindly tell you what that is."),
            React.createElement(States.Buttons, null,
                React.createElement(Button, { type: "primary", onClick: () => { }, label: "Click Me" })))));
}
//# sourceMappingURL=StatesSmall.js.map