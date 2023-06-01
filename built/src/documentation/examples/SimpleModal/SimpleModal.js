import React, { useState } from 'react';
import SimpleModal from '@bufferapp/ui/SimpleModal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';
export default function ExampleSimpleModal() {
    const [modalOpen, openModal] = useState(false);
    const [changed, setChanged] = useState(false);
    const [showingModal, setShowingModal] = useState(false);
    return (React.createElement("div", null,
        React.createElement(Button, { disabled: showingModal, type: "primary", onClick: () => {
                openModal(true);
                setTimeout(() => {
                    setShowingModal(true);
                }, 200);
            }, label: "Bring the modal!" }),
        modalOpen && (React.createElement(SimpleModal, { closeAction: () => {
                openModal(false);
                setChanged(false);
                setShowingModal(false);
            } },
            !changed && (React.createElement("div", { key: "modal1", style: { width: '300px', padding: '30px' } },
                React.createElement(Text, { type: "p" }, "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable."),
                React.createElement("button", { type: "button", onClick: () => setChanged(true) }, "change content"))),
            changed && (React.createElement("div", { key: "modal2", style: { width: '200px', padding: '30px' } },
                React.createElement(Text, { type: "p" },
                    "Ah-ah, ah!",
                    React.createElement("br", null),
                    "Ah-ah, ah!",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "We come from the land of the ice and snow",
                    React.createElement("br", null),
                    "From the midnight sun where the hot springs flow",
                    React.createElement("br", null),
                    "The hammer of the gods",
                    React.createElement("br", null),
                    "Will drive our ships to new lands",
                    React.createElement("br", null),
                    "To fight the horde, sing and cry",
                    React.createElement("br", null),
                    "Valhalla, I am coming"),
                React.createElement("button", { type: "button", onClick: () => setChanged(false) }, "back")))))));
}
//# sourceMappingURL=SimpleModal.js.map