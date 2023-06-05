import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SidebarHeader' o... Remove this comment to see the full error message
import SidebarHeader from '@bufferapp/ui/SidebarHeader'

/** SidebarHeader Example */
export default function ExampleHeader() {
  return <SidebarHeader title="Section Header" />
}
