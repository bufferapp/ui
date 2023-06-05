import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Banner' or its c... Remove this comment to see the full error message
import Banner from '@bufferapp/ui/Banner'

/** Banner Orange */
export default function ExampleBanner() {
  const bannerButton = {
    label: 'Add Billing Details',
    action: () => {
      console.info('yaaas')
    },
  }
  return (
    <Banner
      text="You have 14 days left on your trial."
      actionButton={bannerButton}
      themeColor="orange"
    />
  )
}
