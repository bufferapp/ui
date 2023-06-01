import React, { useState } from 'react';
import Modal from '@bufferapp/ui/Modal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';
export default function ModalTest() {
    const [modalOpen, openModal] = useState(false);
    return (React.createElement("div", { style: { width: '100%', height: '400px', position: 'relative' } },
        React.createElement(Button, { type: "primary", onClick: () => {
                openModal(true);
            }, label: "Bring the modal!" }),
        modalOpen && (React.createElement(Modal, { action: { label: 'It has already happened', disabled: true }, secondaryAction: { label: 'Close' }, footer: React.createElement(Text, { type: "p" }, "Optional footer text!"), closeButton: { callback: () => openModal(false) } },
            React.createElement("div", null,
                React.createElement("div", { style: { padding: '0 16px' } },
                    React.createElement(Text, { type: "h2" }, "Forty-two")),
                React.createElement("div", { style: {
                        background: '#F5F5F5',
                        width: '100%',
                        padding: '16px',
                        boxSizing: 'border-box',
                    } },
                    React.createElement(Text, { type: "p" },
                        "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.",
                        ' ')))))));
}
//# sourceMappingURL=basic-modal.js.map