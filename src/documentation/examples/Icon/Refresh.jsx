import React from 'react';
import { Refresh } from '@bufferapp/ui/Icon';
import style from 'styled-components';

const IconWrapper = style.div`
  position: relative;
`;


/** Refresh */
export default function RefreshExample() {
  return (
    <IconWrapper><Refresh type="secondary" size="large" /></IconWrapper>
  );
}
