import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Text from '@bufferapp/ui/Text';
import styled from 'styled-components';
import { gray, white } from '@bufferapp/ui/style/colors';
const Wrapper = styled.div `
  height: 80px;
  padding: 10px;
  background-color: ${gray};
  color: ${white};
  cursor: pointer;
`;
export default function ExampleTooltip() {
    return (React.createElement(Tooltip, { label: "My top aligned Tooltip \uD83D\uDE4C", position: "left", verticalAlign: "top" },
        React.createElement(Wrapper, null,
            React.createElement(Text, { type: "label" }, "Content"))));
}
//# sourceMappingURL=withVerticalAlign.js.map