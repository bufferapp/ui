import React, { useState } from 'react';
import Modal from '@bufferapp/ui/Modal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';
export default function ModalTest() {
    const [modalOpen, openModal] = useState(false);
    return (React.createElement("div", { style: { width: '100%', height: '700px', position: 'relative' } },
        React.createElement(Button, { type: "primary", onClick: () => {
                openModal(true);
            }, label: "Bring the modal!" }),
        modalOpen && (React.createElement(Modal, { background: "url('https://s3.amazonaws.com/buffer-analyze/images/modal-header-background.png') no-repeat", action: {
                label: "Let's do it",
                action: () => {
                    console.info('action');
                },
            } },
            React.createElement("div", null,
                React.createElement("div", { style: { width: '320px' } },
                    React.createElement(Text, { type: "h2" }, "We have a new look!"),
                    React.createElement(Text, { type: "p" }, "We\u2019ve moved a few things around in the interface which we believe will best set up Analyze for the future. Take a look around!")),
                React.createElement("img", { src: "https://s3.amazonaws.com/buffer-analyze/images/modal-new-layout.png", alt: "The new navigation layout", width: "480px", height: "298px" }))))));
}
//# sourceMappingURL=with-background.js.map