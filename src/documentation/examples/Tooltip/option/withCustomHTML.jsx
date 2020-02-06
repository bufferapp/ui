import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar'; // eslint-disable-line

const customHTML = (
  <div>
    <span style={{ color: '#21F32A'}}>0.4%</span>
    <p style={{ display: 'inline' }}> potential reach</p>
  </div>
);

/** With CustomHTML */
export default function ExampleTooltip() {
  return (
    <Tooltip customHTML={customHTML} position="bottom">
      <Avatar
        src="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
        alt="@joelgascoigne"
        size="medium"
      />
    </Tooltip>
  );
}
