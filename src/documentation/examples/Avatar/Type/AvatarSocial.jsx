import React from 'react';
import Avatar from '@bufferapp/ui/Avatar';

/** With Social Network Icon */
export default function ExampleAvatar() {
  return (
    <Avatar
      src="http://i.pravatar.cc/64?img=60"
      alt="Hamish"
      size="large"
      type="social"
      network="startPage"
    />
  );
}
