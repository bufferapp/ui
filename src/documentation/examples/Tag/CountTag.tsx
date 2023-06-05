import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tag' or its corr... Remove this comment to see the full error message
import Tag from '@bufferapp/ui/Tag'

/** Tag with number */
export default function BasicTag() {
  return (
    <Tag color="grayLight" textColor="grayDark">
      10
    </Tag>
  )
}
