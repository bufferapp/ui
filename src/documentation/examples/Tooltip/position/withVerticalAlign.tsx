import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tooltip' or its ... Remove this comment to see the full error message
import Tooltip from '@bufferapp/ui/Tooltip'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'
import styled from 'styled-components'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/style/colors' or... Remove this comment to see the full error message
import { gray, white } from '@bufferapp/ui/style/colors'

const Wrapper = styled.div`
  height: 80px;
  padding: 10px;
  background-color: ${gray};
  color: ${white};
  cursor: pointer;
`

/** Left Aligned with Top vertical alignment */
export default function ExampleTooltip() {
  return (
    <Tooltip
      label="My top aligned Tooltip 🙌"
      position="left"
      verticalAlign="top"
    >
      <Wrapper>
        <Text type="label">Content</Text>
      </Wrapper>
    </Tooltip>
  )
}
