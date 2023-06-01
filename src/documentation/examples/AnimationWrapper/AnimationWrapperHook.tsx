import React, { useState, useEffect } from 'react'
import { useAnimation } from '@bufferapp/ui/AnimationWrapper'
import Text from '@bufferapp/ui/Text'

import { stageInTop, stageOutRight } from '@bufferapp/ui/style/animations'

/** useAnimation hook example */
export default function ExampleSimpleModal() {
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setChanged(!changed)
    }, 2000)
  }, [changed])

  const { AnimationWrapper, animationProps } = useAnimation({
    stageInAnimation: stageInTop,
    stageOutAnimation: stageOutRight,
    duration: 450,
  })

  return (
    <div>
      <AnimationWrapper {...animationProps}>
        {!changed && (
          <div style={{ width: '300px', padding: '30px', background: 'pink' }}>
            <Text type="p">
              There is a theory which states that if ever anyone discovers
              exactly what the Universe is for and why it is here, it will
              instantly disappear and be replaced by something even more bizarre
              and inexplicable.
            </Text>
          </div>
        )}
        {changed && (
          <div
            style={{
              width: '200px',
              padding: '30px',
              background: 'paleturquoise',
            }}
          >
            <Text type="p">
              Ah-ah, ah!
              <br />
              Ah-ah, ah!
              <br />
              <br />
              We come from the land of the ice and snow
              <br />
              From the midnight sun where the hot springs flow
              <br />
              The hammer of the gods
              <br />
              Will drive our ships to new lands
              <br />
              To fight the horde, sing and cry
              <br />
              Valhalla, I am coming
            </Text>
          </div>
        )}
      </AnimationWrapper>
    </div>
  )
}
