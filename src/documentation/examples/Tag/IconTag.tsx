import React from 'react'
import Tag from '@bufferapp/ui/Tag'
import FlashIcon from '@bufferapp/ui/Icon/Icons/Flash'

/** Tag with icon */
export default function IconTag() {
  return (
    <Tag color="purpleLighter">
      <FlashIcon color="purple" />
    </Tag>
  )
}
