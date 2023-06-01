import React from 'react'
import States from '@bufferapp/ui/States'
import Button from '@bufferapp/ui/Button'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 562px;
  width: 780px;
  border: 1px solid black;
`

/** States Large With Two Buttons Example */
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
        <States.Buttons>
          <Button type="secondary" onClick={() => {}} label="Maybe later" />
          <Button type="primary" onClick={() => {}} label="Click Me" />
        </States.Buttons>
      </States>
    </Wrapper>
  )
}
