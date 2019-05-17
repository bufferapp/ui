import React from 'react';
import Avatar from '@bufferapp/ui/Avatar';

/** With Fallback Icon */
export default function ExampleAvatar() {
  return (
    <Avatar
      src="https://broken-image-url"
      fallbackUrl="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
      alt="Example"
      size="large"
      type="social"
      network="instagram"
    />
  );
}
