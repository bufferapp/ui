import React, { useState } from 'react';
import Modal from '@bufferapp/ui/Modal';
import Button from '@bufferapp/ui/Button';
import Carousel from '@bufferapp/ui/Carousel';

/** With Carousel Modal */
export default function ModalTest() {
  const [modalOpen, openModal] = useState(false);
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <Button
        type="primary"
        onClick={() => {
          openModal(true);
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <Modal
          width="1100px"
          closeButton={{callback: () => openModal(false)}}
          noBackground
          dismissible
        >
          <div>
            <Carousel width="1000px">
              <div
                style={{ height: '500px', width: '1000px', background: 'red' }}
              >
                hello
              </div>
              <div
                style={{ height: '500px', width: '1000px', background: 'blue' }}
              >
                hello
              </div>
              <div
                style={{ height: '500px', width: '1000px', background: 'green' }}
              >
                hello
              </div>
            </Carousel>
          </div>
        </Modal>
      )}
    </div>
  );
}
