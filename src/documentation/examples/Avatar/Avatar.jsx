import React from 'react';
import Avatar from '@bufferapp/ui/Avatar';

/** Sizes */
export default function ExampleAvatar() {
  return (
    <React.Fragment>
      <Avatar
        src="https://pbs.twimg.com/profile_images/988613046510628866/Io1ZQUpy_400x400.jpg"
        alt="@joelgascoigne"
        size="small"
      />
      <Avatar
        src="https://pbs.twimg.com/profile_images/988613046510628866/Io1ZQUpy_400x400.jpg"
        alt="@joelgascoigne"
        size="medium"
      />
      <Avatar
        src="https://pbs.twimg.com/profile_images/988613046510628866/Io1ZQUpy_400x400.jpg"
        alt="@joelgascoigne"
        size="large"
      />
    </React.Fragment>
  );
}
