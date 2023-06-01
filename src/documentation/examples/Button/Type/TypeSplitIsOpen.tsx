import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
`

/** Split Button With On Open functionality */
export default function ExampleIsOpen() {
  return (
    <Wrapper>
      <Button
        onSelectClick={() => true}
        onClick={() => true}
        type="secondary"
        isSplit
        items={[
          { id: '1', title: 'Save as Draft' },
          { id: '2', title: 'Save as Post' },
        ]}
        label="Click Me"
        onOpen={() => console.log('OnOpen Event Fired')}
      />
    </Wrapper>
  )
}
