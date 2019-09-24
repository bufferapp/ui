import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 400px; 
`

/** TextArea FullHeight Example */
export default function ExampleTextArea() {
  return (
    <StyledDiv>
      <TextArea label='Textarea (Full Height)' placeholder='placeholder' onChange={()=>{}} id="example1" fullHeight />
    </StyledDiv>
    
  );
}
