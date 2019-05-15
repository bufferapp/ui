import React from 'react';
import Banner from '@bufferapp/ui/Banner';

/** Banner Example */
export default function ExampleBanner() {
  return <Banner customHTML={{ __html: '<span>Hello there!!</span>' }} />;
}
