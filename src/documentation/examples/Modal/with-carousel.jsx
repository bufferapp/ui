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
          action={{ label: 'Don’t Panic!', callback: () => openModal(false) }}
          wide
        >
          <div>
            <Carousel width="400px">
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
          </div>
        </Modal>
      )}
    </div>
  );
}
