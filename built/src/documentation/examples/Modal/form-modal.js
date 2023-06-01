import React, { useState } from 'react';
import Modal from '@bufferapp/ui/Modal';
import Text from '@bufferapp/ui/Text';
import Input from '@bufferapp/ui/Input';
import Button from '@bufferapp/ui/Button';
export default function FormModalTest() {
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
            }, label: "Bring the modal!" }),
        modalOpen && (React.createElement(Modal, { action: { label: "Don't close yet!" }, secondaryAction: {
                label: 'Cancel',
                callback: () => openModal(false),
            }, dismissible: false },
            React.createElement("div", { style: { width: '100%', padding: '16px', boxSizing: 'border-box' } },
                React.createElement(Text, { type: "h3" }, "Your name here"),
                React.createElement(Input, { type: "input", onChange: () => { }, name: "foo", placeholder: "placeholder text" }))))));
}
//# sourceMappingURL=form-modal.js.map