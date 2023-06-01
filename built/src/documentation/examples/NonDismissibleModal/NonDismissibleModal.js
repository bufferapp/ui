import React, { useState, useEffect } from 'react';
import NonDismissibleModal from '@bufferapp/ui/NonDismissibleModal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';
export default function ExampleSimpleModal() {
    const [modalOpen, openModal] = useState(false);
    useEffect(() => {
        const selfDestroy = setTimeout(() => {
            openModal(false);
        }, 3000);
        return () => {
            clearInterval(selfDestroy);
        };
    }, [modalOpen]);
    return (React.createElement("div", null,
        React.createElement(Button, { type: "primary", onClick: () => {
                openModal(true);
            }, label: "Bring the modal!" }),
        modalOpen && (React.createElement(NonDismissibleModal, null,
            React.createElement("div", { key: "modal1", style: { width: '300px', padding: '30px' } },
                React.createElement(Text, { type: "p" },
                    "This Modal will self destroy in",
                    React.createElement("b", null,
                        ` `,
                        "3 seconds")))))));
}
//# sourceMappingURL=NonDismissibleModal.js.map