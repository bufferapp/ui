import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Banner' or its c... Remove this comment to see the full error message
import Banner from '@bufferapp/ui/Banner'

/** Orange banner with customHTML */
export default function ExampleBanner() {
  return (
    <Banner
      themeColor="orange"
      customHTML={{
        __html:
          "<b>You're on the Business trial.</b> Complete your billing details to make the transition smooth.",
      }}
      /* eslint-disable-next-line */
      onCloseBanner={() => console.log('Banner closed!')}
    />
  )
}
