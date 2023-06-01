import React, { useState, useEffect } from 'react';
import AnimationWrapper from '@bufferapp/ui/AnimationWrapper';
import Text from '@bufferapp/ui/Text';
import { stageInCenter, stageOutCenter } from '@bufferapp/ui/style/animations';
export default function ExampleSimpleModal() {
    const [changed, setChanged] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setChanged(!changed);
        }, 2000);
    }, [changed]);
    return (React.createElement("div", null,
        React.createElement(AnimationWrapper, { stageInAnimation: stageInCenter, stageOutAnimation: stageOutCenter, duration: 450 },
            !changed && (React.createElement("div", { style: { width: '300px', padding: '30px', background: 'pink' } },
                React.createElement(Text, { type: "p" }, "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable."))),
            changed && (React.createElement("div", { style: {
                    width: '200px',
                    padding: '30px',
                    background: 'paleturquoise',
                } },
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
                    "Valhalla, I am coming"))))));
}
//# sourceMappingURL=AnimationWrapper.js.map