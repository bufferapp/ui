import React, { useState } from 'react'
import Modal from '@bufferapp/ui/Modal'
import Text from '@bufferapp/ui/Text'
import Input from '@bufferapp/ui/Input'
import Button from '@bufferapp/ui/Button'

/** Form modal, prevent dismiss until */
export default function FormModalTest() {
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
        label="Bring the modal!"
      />
      {modalOpen && (
        <Modal
          action={{ label: "Don't close yet!" }}
          secondaryAction={{
            label: 'Cancel',
            callback: () => openModal(false),
          }}
          dismissible={false}
        >
          <div
            style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}
          >
            <Text type="h3">Your name here</Text>
            <Input
              type="input"
              onChange={() => {}}
              name="foo"
              placeholder="placeholder text"
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
