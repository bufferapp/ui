import React from 'react'
import Carousel from '@bufferapp/ui/Carousel'

/** Carousel One Direction Example */
export default function ExampleCarousel() {
  return (
    <Carousel width="400px" rightNavigation>
      <img
        src="https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png"
        alt="slide 1"
        width="400"
      />
      <img
        src="https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png"
        alt="slide 2"
        width="400"
      />
      <img
        src="https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png"
        alt="slide 3"
        width="400"
      />
    </Carousel>
  )
}
