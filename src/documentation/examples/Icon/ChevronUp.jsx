import React from 'react';
import { ChevronUp } from '@bufferapp/ui/Icon';
import style from 'styled-components';

const IconWrapper = style.div`
  position: relative;
`;


/** Chevron Up */
export default function ChevronUpExample() {
  return (
    <IconWrapper><ChevronUp type="secondary" size="large" /></IconWrapper>
  );
}
