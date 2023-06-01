import React, { useState, useEffect } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/AnimationWrapper... Remove this comment to see the full error message
import AnimationWrapper from '@bufferapp/ui/AnimationWrapper'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'

// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/style/animations... Remove this comment to see the full error message
import { stageInCenter, stageOutCenter } from '@bufferapp/ui/style/animations'

/** AnimationWrapper Example */
export default function ExampleSimpleModal() {
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setChanged(!changed)
    }, 2000)
  }, [changed])

  return (
    <div>
      <AnimationWrapper
        stageInAnimation={stageInCenter}
        stageOutAnimation={stageOutCenter}
        duration={450}
      >
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
