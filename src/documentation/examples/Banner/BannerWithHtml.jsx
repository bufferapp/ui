import React from 'react';
import Banner from '@bufferapp/ui/Banner';

/** Orange banner with customHTML */
export default function ExampleBanner() {
  return <Banner themeColor="orange" customHTML={{ __html: '<span class="banner-text"><b>You\'re on the Business trial.</b> Complete your billing details to make the transition smooth.</span>' }} />;
}
