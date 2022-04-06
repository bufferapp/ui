import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar'; // eslint-disable-line

/** Visible */
export default function ExampleTooltip() {
    return (
      <Tooltip label="Visible tooltip">
        <Avatar
          src="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
          alt="@joelgascoigne"
          size="medium"
        />
      </Tooltip>
    )
}
