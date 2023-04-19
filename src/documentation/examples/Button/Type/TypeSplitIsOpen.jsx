import React from 'react';
import Button from '@bufferapp/ui/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

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
  );
}
