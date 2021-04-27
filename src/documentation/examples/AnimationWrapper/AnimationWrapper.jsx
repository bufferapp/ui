import React, { useState, useEffect } from 'react';
import AnimationWrapper from '@bufferapp/ui/AnimationWrapper';
import Text from '@bufferapp/ui/Text';
import { keyframes } from 'styled-components';

const stageInAnimation = keyframes`
  0% {
    transform: scale(.5);
    opacity: .5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const stageOutAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(.5);
    opacity: .5;
  }
`;


/** AnimationWrapper Example */
export default function ExampleSimpleModal() {
  const [changed, setChanged] = useState(false);

  useEffect(()=> {
    setTimeout(()=> {
      setChanged(!changed);
    }, 2000)
  }, [changed]);

  return (
    <div>
      <AnimationWrapper stageInAnimation={stageInAnimation} stageOutAnimation={stageOutAnimation} duration={450}>
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
          <div style={{ width: '200px', padding: '30px', background: 'paleturquoise' }}>
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
  );
}
