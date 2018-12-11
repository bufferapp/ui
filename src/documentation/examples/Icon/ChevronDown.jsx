import React from 'react';
import { ChevronDown } from '@bufferapp/ui/Icon';
import style from 'styled-components';

const IconWrapper = style.div`
  position: relative;
`;


/** Chevron Down */
export default function ChevronDownExample() {
  return (
    <IconWrapper><ChevronDown type="secondary" size="large" /></IconWrapper>
  );
}
