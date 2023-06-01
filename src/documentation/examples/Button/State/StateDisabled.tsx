import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
`

/** Disabled */
export default function ExampleDisabled() {
  return (
    <Wrapper>
      <Button type="primary" disabled onClick={() => {}} label="Click Me" />
      <Button type="secondary" disabled onClick={() => {}} label="Click Me" />
      <Button
        onSelectClick={() => true}
        onClick={() => true}
        type="secondary"
        disabled
        isSplit
        items={[
          { id: '1', title: 'Save as Draft' },
          { id: '2', title: 'Save as Post' },
        ]}
        label="Click Me"
      />
    </Wrapper>
  )
}
