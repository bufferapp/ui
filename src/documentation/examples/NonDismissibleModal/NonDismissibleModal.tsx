import React, { useState, useEffect } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/NonDismissibleMo... Remove this comment to see the full error message
import NonDismissibleModal from '@bufferapp/ui/NonDismissibleModal'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'

/** NonDismissibleModal Example */
export default function ExampleSimpleModal() {
  const [modalOpen, openModal] = useState(false)

  useEffect(() => {
    const selfDestroy = setTimeout(() => {
      openModal(false)
    }, 3000)

    return () => {
      clearInterval(selfDestroy)
    }
  }, [modalOpen])

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          openModal(true)
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <NonDismissibleModal>
          <div key="modal1" style={{ width: '300px', padding: '30px' }}>
            <Text type="p">
              This Modal will self destroy in
              <b>{` `}3 seconds</b>
            </Text>
          </div>
        </NonDismissibleModal>
      )}
    </div>
  )
}
