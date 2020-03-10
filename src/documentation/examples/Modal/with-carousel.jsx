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
            <Carousel width="200em">
              <img src="http://placekitten.com/200/300" alt="" />
              <img src="http://placekitten.com/200/300" alt="" />
              <img src="http://placekitten.com/200/300" alt="" />
            </Carousel>
          </div>
        </Modal>
      )}
    </div>
  );
}
