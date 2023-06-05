import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SocialButton' or... Remove this comment to see the full error message
import SocialButton from '@bufferapp/ui/SocialButton'

/** Linkedin Social Button */
export default function ExampleSocialButton() {
  return (
    <div style={{ position: 'relative' }}>
      <SocialButton channel="linkedin" onClick={() => {}} />
    </div>
  )
}
