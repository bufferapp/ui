import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/States' or its c... Remove this comment to see the full error message
import States from '@bufferapp/ui/States'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 562px;
  width: 780px;
  border: 1px solid black;
`

/** States Large without Buttons Example */
export default function ExampleStates() {
  return (
    <Wrapper>
      <States>
        <States.Image
          src="./images/illustration2.png"
          alt="a colourful illustration of a buffer character"
        />
        <States.Header>We are trying to tell you something</States.Header>
        <States.Description>
          We have something very important to tell you that you should know
          about and we would like to kindly tell you what that is.
        </States.Description>
      </States>
    </Wrapper>
  )
}
