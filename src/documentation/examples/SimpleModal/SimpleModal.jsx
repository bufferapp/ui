import React, { useState } from 'react';
import SimpleModal from '@bufferapp/ui/SimpleModal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';

/** SimpleModal Example */
export default function ExampleSimpleModal() {
  const [modalOpen, openModal] = useState(false);
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          openModal(true);
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <SimpleModal closeAction={() => openModal(false)}>
          <div style={{ width: '300px' }}>
            <Text type="p">
              There is a theory which states that if ever anyone discovers
              exactly what the Universe is for and why it is here, it will
              instantly disappear and be replaced by something even more bizarre
              and inexplicable.
            </Text>
            <button type="button">merp</button>
            <a href="#/merp">booo</a>
            <button type="button">weeee</button>
            {// eslint-disable-next-line
              <div tabIndex="0">Hello world i'm a focusable div</div>}
          </div>
        </SimpleModal>
      )}
    </div>
  );
}
