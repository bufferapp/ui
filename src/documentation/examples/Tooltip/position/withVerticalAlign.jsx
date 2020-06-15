import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Text from '@bufferapp/ui/Text';
import styled from 'styled-components';
import { gray, white } from '@bufferapp/ui/style/colors';

const Wrapper = styled.div`
  height: 80px;
  padding: 10px;
  background-color: ${gray};
  color: ${white};
  cursor: pointer;
`;

/** Left Aligned with Top vertical alignment */
export default function ExampleTooltip() {
    return (
      <Tooltip label="My top aligned Tooltip 🙌" position="left" verticalAlign="top">
        <Wrapper><Text type="label">Content</Text></Wrapper>
      </Tooltip>
    )
}
