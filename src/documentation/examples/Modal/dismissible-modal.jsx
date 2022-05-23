import React, { useState } from 'react';
import { css } from 'styled-components';
import { grayDarker } from '@bufferapp/ui/style/colors';
import Modal from '@bufferapp/ui/Modal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';

const customStyles = css`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 40px;
  cursor: pointer;

  transition: transform 0.15s ease-out;
  svg {
    fill: ${grayDarker};
    transition: fill 0.15s ease-out;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      fill: #f00;
    }
  }
`;

/** Dismissible Modal */
export default function DismissibleModalTest() {
  const [modalOpen, openModal] = useState(false)
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <Button
        type="primary"
        onClick={() => {openModal(true)}}
        label="Bring the modal!"
      />
      { modalOpen && (
        <Modal
          action={{ label: "It has already happened", disabled: true, }}
          secondaryAction={{ label: "Close" }}
          footer={(<Text type="p">Optional footer text!</Text>)}
          closeButton={{ callback: () => openModal(false), customStyles }}
        >
          <div>
            <div style={{ padding: '0 16px' }}><Text type="h2">Forty-two</Text></div>
            <div style={{ background: '#F5F5F5', width: '100%', padding: '16px', boxSizing: 'border-box' }}>
              <Text type="p">There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. </Text>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
