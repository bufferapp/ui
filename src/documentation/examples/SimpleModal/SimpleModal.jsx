import React, { useState } from 'react';
import SimpleModal from '@bufferapp/ui/SimpleModal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';

/** SimpleModal Example */
export default function ExampleSimpleModal() {
  const [modalOpen, openModal] = useState(false);
  const [changed, setChanged] = useState(false);
  const [showingModal, setShowingModal] = useState(false);

  return (
    <div>
      <Button
        disabled={showingModal}
        type="primary"
        onClick={() => {
          openModal(true);
          setTimeout(() => {
            setShowingModal(true)
          }, 200)
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <SimpleModal
          closeAction={() => {
            openModal(false)
            setChanged(false)
            setShowingModal(false)
          }}
        >
          {!changed && (
            <div key="modal1" style={{ width: '300px', padding: '30px' }}>
              <Text type="p">
                There is a theory which states that if ever anyone discovers
                exactly what the Universe is for and why it is here, it will
                instantly disappear and be replaced by something even more bizarre
                and inexplicable.
              </Text>
              <button type="button" onClick={() => setChanged(true)}>change content</button>
            </div>
          )}
          {changed && (
            <div key="modal2" style={{ width: '200px', padding: '30px' }}>
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
              <button type="button" onClick={() => setChanged(false)}>back</button>
            </div>
          )}
        </SimpleModal>)}
    </div>
  );
}
