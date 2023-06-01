import React, { useState } from 'react';
import Modal from '@bufferapp/ui/Modal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';
export default function ModalTest() {
    const previousFocusRef = React.createRef();
    const [modalOpen, openModal] = useState(false);
    return (React.createElement("div", { style: {
            width: '100%',
            height: '400px',
            position: 'relative',
            padding: '16px',
            boxSizing: 'border-box',
        } },
        React.createElement(Button, { type: "primary", onClick: () => {
                openModal(true);
            }, label: "Eyes on me!", ref: previousFocusRef }),
        modalOpen && (React.createElement(Modal, { action: { label: 'Don’t Panic!', callback: () => { } }, previousFocus: previousFocusRef },
            React.createElement("div", null,
                React.createElement("div", { style: {
                        width: '100%',
                        padding: '16px',
                        boxSizing: 'border-box',
                    } },
                    React.createElement(Text, { type: "h3" }, "Curiously enough, the only thing that went through the mind of the bowl of petunias as it fell was Oh no, not again. Many people have speculated that if we knew exactly why the bowl of petunias had thought that we would know a lot more about the nature of the Universe than we do now.")))))));
}
//# sourceMappingURL=focus_reset.js.map