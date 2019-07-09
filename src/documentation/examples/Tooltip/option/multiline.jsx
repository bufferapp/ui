import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar'; // eslint-disable-line

/** Multiline */
export default function ExampleTooltip() {
    return (
      <Tooltip label="My Tooltip Label with multiple lines. Adding up an example here with a long tooltip text." position="bottom">
        <Avatar
          src="https://pbs.twimg.com/profile_images/988613046510628866/Io1ZQUpy_400x400.jpg"
          alt="@joelgascoigne"
          size="medium"
        />
      </Tooltip>
    )
}
