import React, { useState } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Modal' or its co... Remove this comment to see the full error message
import Modal from '@bufferapp/ui/Modal'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'

/** Reset focus on dismiss */
export default function ModalTest() {
  const previousFocusRef = React.createRef()
  const [modalOpen, openModal] = useState(false)
  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Button
        type="primary"
        onClick={() => {
          openModal(true)
        }}
        label="Eyes on me!"
        ref={previousFocusRef}
      />
      {modalOpen && (
        <Modal
          action={{ label: 'Don’t Panic!', callback: () => {} }}
          previousFocus={previousFocusRef}
        >
          <div>
            <div
              style={{
                width: '100%',
                padding: '16px',
                boxSizing: 'border-box',
              }}
            >
              <Text type="h3">
                Curiously enough, the only thing that went through the mind of
                the bowl of petunias as it fell was Oh no, not again. Many
                people have speculated that if we knew exactly why the bowl of
                petunias had thought that we would know a lot more about the
                nature of the Universe than we do now.
              </Text>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
