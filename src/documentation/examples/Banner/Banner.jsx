import React from 'react';
import Banner from '@bufferapp/ui/Banner';

/** Banner Example */
export default function ExampleBanner() {
  const bannerButton = {
    label: 'Add Billing Details',
    action: () => {
      console.info('yaaas');
    },
  };
  return <Banner text="You have 14 days left on your trial." actionButton={bannerButton} />;
}
