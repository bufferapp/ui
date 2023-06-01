import React, { useState } from 'react'
import Modal from '@bufferapp/ui/Modal'
import Text from '@bufferapp/ui/Text'
import Button from '@bufferapp/ui/Button'

/** Modal with background */
export default function ModalTest() {
  const [modalOpen, openModal] = useState(false)
  return (
    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
      <Button
        type="primary"
        onClick={() => {
          openModal(true)
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <Modal
          background="url('https://s3.amazonaws.com/buffer-analyze/images/modal-header-background.png') no-repeat"
          action={{
            label: "Let's do it",
            action: () => {
              console.info('action')
            },
          }}
        >
          <div>
            <div style={{ width: '320px' }}>
              <Text type="h2">We have a new look!</Text>
              <Text type="p">
                We’ve moved a few things around in the interface which we
                believe will best set up Analyze for the future. Take a look
                around!
              </Text>
            </div>
            <img
              src="https://s3.amazonaws.com/buffer-analyze/images/modal-new-layout.png"
              alt="The new navigation layout"
              width="480px"
              height="298px"
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
