import React from 'react';
import SocialButton from '@bufferapp/ui/SocialButton';

/** Twitter Social Button */
export default function ExampleSocialButton() {
  return (
    <div style={{ position: 'relative' }}>
      <SocialButton channel="twitter" />
    </div>
  );
}
