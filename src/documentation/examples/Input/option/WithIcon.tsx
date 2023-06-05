import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Input' or its co... Remove this comment to see the full error message
import Input from '@bufferapp/ui/Input'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Searc... Remove this comment to see the full error message
import SearchIcon from '@bufferapp/ui/Icon/Icons/Search'

/** Input with icon */
export default function ExampleInput() {
  return (
    <Input
      onChange={() => {}}
      name="foo"
      placeholder="Search channels"
      icon={<SearchIcon size="large" />}
    />
  )
}
