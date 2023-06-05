import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/DropdownMenu' or... Remove this comment to see the full error message
import DropdownMenu from '@bufferapp/ui/DropdownMenu'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tag' or its corr... Remove this comment to see the full error message
import Tag from '@bufferapp/ui/Tag'
import styled from 'styled-components'

// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Flash... Remove this comment to see the full error message
import Flash from '@bufferapp/ui/Icon/Icons/Flash'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Canva... Remove this comment to see the full error message
import Canva from '@bufferapp/ui/Icon/Icons/Canva'

// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/style/colors' or... Remove this comment to see the full error message
import { white, grayDark, canva, canvaLight } from '@bufferapp/ui/style/colors'

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  position: relative;
  text-decoration: none;
  z-index: 2;
  cursor: pointer;
  background-color: ${white};
  border: 1px solid ${grayDark};
  border-radius: 4px;
`

const menuItems = [
  {
    id: '1',
    title: 'FAQ',
    onItemClick: () => console.info('FAQ'),
  },
  {
    id: '2',
    title: 'Status',
    onItemClick: () => console.info('Status'),
  },
  {
    id: '3',
    title: 'Pricing & Plans',
    onItemClick: () => console.info('Pricing'),
  },
  {
    id: '4',
    title: 'Wishlist',
    onItemClick: () => console.info('Wishlist'),
    disabled: true,
  },
  {
    id: '5',
    title: 'Highlighted',
    colors: { title: 'purple', iconHover: 'red' },
    icon: <Flash color="purple" />,
    onItemClick: () => console.info('Highlighted'),
  },
  {
    id: '6',
    title: 'Canva',
    colors: { iconHover: canvaLight },
    icon: <Canva color={canva} />,
    tag: <Tag>New</Tag>,
    onItemClick: () => console.info('Canva'),
  },
]

const Navigation = styled.nav`
  display: flex;
  height: 45px;
  width: 100px;
  padding: 10px 0px;
  margin: 0;
`

/** DropdownMenu Example */
export default function ExampleDropdownMenu() {
  return (
    <Navigation>
      <DropdownMenu
        ariaLabel="Help Menu"
        ariaLabelPopup="Help"
        menubarItem={<MenuItem>Help</MenuItem>}
        items={menuItems}
        xPosition="left"
      />
    </Navigation>
  )
}
