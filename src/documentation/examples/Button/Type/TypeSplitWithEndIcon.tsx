import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tag' or its corr... Remove this comment to see the full error message
import Tag from '@bufferapp/ui/Tag'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Flash } from '@bufferapp/ui/Icon'

/** Split Button With End Icon */
export default function ExampleSplitButton() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      type="secondary"
      isSplit
      items={[
        { id: '1', title: 'Save as Draft' },
        {
          id: '2',
          title: 'Request Approval',
          icon: (
            <Tag color="purpleLighter">
              <Flash color="purple" />
            </Tag>
          ),
          iconEnd: true,
        },
      ]}
      label="Click Me"
    />
  )
}
