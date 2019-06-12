import React from 'react';
import Banner from '@bufferapp/ui/Banner';

/** Banner Example */
export default function ExampleBanner() {
  return <Banner customHTML={{ __html: '<b>You\'re on the Business trial.</b> Complete your billing details to make the transition smooth.'}} />;
}
