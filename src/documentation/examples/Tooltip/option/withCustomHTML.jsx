import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar'; // eslint-disable-line

const customHTML = (
  <div>
    <span style={{ color: '#21F32A', display: 'inline' }}>0.4%</span>
    <p>potential reach</p>
  </div>
);

/** With CustomHTML */
export default function ExampleTooltip() {
  return (
    <Tooltip customHTML={customHTML} position="bottom">
      <Avatar
        src="https://pbs.twimg.com/profile_images/988613046510628866/Io1ZQUpy_400x400.jpg"
        alt="@joelgascoigne"
        size="medium"
      />
    </Tooltip>
  );
}
