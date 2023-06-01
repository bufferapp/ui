import React, { useState } from 'react'
import Modal from '@bufferapp/ui/Modal'
import Text from '@bufferapp/ui/Text'
import Button from '@bufferapp/ui/Button'

/** Modal */
export default function ModalTest() {
  const [modalOpen, openModal] = useState(false)
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <Button
        type="primary"
        onClick={() => {
          openModal(true)
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <Modal
          action={{ label: 'It has already happened', disabled: true }}
          secondaryAction={{ label: 'Close' }}
          footer={<Text type="p">Optional footer text!</Text>}
          closeButton={{ callback: () => openModal(false) }}
        >
          <div>
            <div style={{ padding: '0 16px' }}>
              <Text type="h2">Forty-two</Text>
            </div>
            <div
              style={{
                background: '#F5F5F5',
                width: '100%',
                padding: '16px',
                boxSizing: 'border-box',
              }}
            >
              <Text type="p">
                There is a theory which states that if ever anyone discovers
                exactly what the Universe is for and why it is here, it will
                instantly disappear and be replaced by something even more
                bizarre and inexplicable.
                {' '}
              </Text>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
