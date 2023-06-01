import React from 'react';
import States from '@bufferapp/ui/States';
import Button from '@bufferapp/ui/Button';
import styled from 'styled-components';
const Wrapper = styled.div `
  height: 426px;
  width: 480px;
  border: 1px solid black;
  background-color: white;
`;
export default function ExampleStates() {
    return (React.createElement(Wrapper, null,
        React.createElement(States, { size: "small" },
            React.createElement(States.Media, null,
                React.createElement("iframe", { title: "buffer promo vid", width: "300", height: "200", src: "https://www.youtube.com/embed/KHWHAeWQ1u8", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })),
            React.createElement(States.Header, null, "We are trying to tell you something"),
            React.createElement(States.Description, null, "We have something very important to tell you that you should know about and we would like to kindly tell you what that is."),
            React.createElement(States.Buttons, null,
                React.createElement(Button, { type: "primary", onClick: () => { }, label: "Click Me" })))));
}
//# sourceMappingURL=StatesSmallWithMedia.js.map