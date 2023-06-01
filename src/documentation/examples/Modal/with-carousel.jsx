import React, { useState } from 'react'
import Modal from '@bufferapp/ui/Modal'
import Button from '@bufferapp/ui/Button'
import Carousel from '@bufferapp/ui/Carousel'

/** With Carousel Modal */
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
          width="1100px"
          closeButton={{ callback: () => openModal(false) }}
          noBackground
          dismissible
        >
          <div>
            <Carousel width="1000px">
              <div
                style={{
                  height: '500px',
                  width: '1000px',
                  background:
                    '#cecece url("https://picsum.photos/id/1002/1000/500")',
                  display: 'flex',
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '100px',
                  fontWeight: 500,
                }}
              >
                oh
              </div>
              <div
                style={{
                  height: '500px',
                  width: '1000px',
                  background:
                    '#cecece url("https://picsum.photos/id/1052/1000/500")',
                  display: 'flex',
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '100px',
                  fontWeight: 500,
                }}
              >
                hi
              </div>
              <div
                style={{
                  height: '500px',
                  width: '1000px',
                  background:
                    '#cecece url("https://picsum.photos/id/1032/1000/500")',
                  display: 'flex',
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '100px',
                  fontWeight: 500,
                }}
              >
                there
              </div>
            </Carousel>
          </div>
        </Modal>
      )}
    </div>
  )
}
