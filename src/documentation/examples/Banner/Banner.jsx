import React from 'react';
import Banner from '@bufferapp/ui/Banner';

/** Banner Example */
export default function ExampleBanner() {
  const bannerButton = {
    label: 'Click me now!',
    action: () => {
      console.info('yaaas');
    },
  };
  return <Banner text="Hello Wooooooorld!" actionButton={bannerButton} />;
}
