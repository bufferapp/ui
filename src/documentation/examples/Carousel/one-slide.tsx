import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Carousel' or its... Remove this comment to see the full error message
import Carousel from '@bufferapp/ui/Carousel'

/** Carousel with One Slide Example */
export default function ExampleCarousel() {
  return (
    <Carousel width="400px">
      <img
        src="https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png"
        alt="slide 1"
        width="400"
      />
    </Carousel>
  )
}
