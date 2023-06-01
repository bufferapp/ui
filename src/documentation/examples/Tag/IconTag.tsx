import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tag' or its corr... Remove this comment to see the full error message
import Tag from '@bufferapp/ui/Tag'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Flash... Remove this comment to see the full error message
import FlashIcon from '@bufferapp/ui/Icon/Icons/Flash'

/** Tag with icon */
export default function IconTag() {
  return (
    <Tag color="purpleLighter">
      <FlashIcon color="purple" />
    </Tag>
  )
}
