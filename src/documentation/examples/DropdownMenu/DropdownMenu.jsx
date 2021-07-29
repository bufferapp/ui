import React from 'react';
import DropdownMenu from '@bufferapp/ui/DropdownMenu';
import Tag from '@bufferapp/ui/Tag';
import styled from 'styled-components';

import Flash from '@bufferapp/ui/Icon/Icons/Flash';
import Canva from '@bufferapp/ui/Icon/Icons/Canva';

import { white, grayDark, canva, canvaLight } from '@bufferapp/ui/style/colors';

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
`;

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
    title: (
      <span>
        Canva
        <Tag>New</Tag>
      </span>
    ),
    colors: { iconHover: canvaLight },
    icon: <Canva color={canva} />,
    onItemClick: () => console.info('Canva'),
  },
];

const Navigation = styled.nav`
  display: flex;
  height: 45px;
  width: 100px;
  padding: 10px 0px;
  margin: 0;
`;

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
  );
}
