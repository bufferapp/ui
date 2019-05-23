import React from 'react';
import Sidebar from '@bufferapp/ui/Sidebar';
import { Person } from '@bufferapp/ui/Icon';

/** Sidebar Example */
export default function ExampleSidebar() {
  const mock = [
    {
      _id: '1',
      title: 'Section Header',
      items: [
        {
          _id: '1a',
          title:
            'Label DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel Default',
          icon: <Person color="gray" />,
          onItemClick: item => console.info(item.title),
          badges: 123,
        },
        {
          _id: '1c',
          title: 'Label Default',
          color: '#BFBFBF',
          component: item =>
            `<div style="background: ${
              item.color
            }; width: 16px; height: 16px; border-radius: 4px;"/>`,
          onItemClick: () => console.info('Assigned Clicked'),
          badges: 123,
        },
        {
          _id: '1c',
          user: {
            id: 'W_Lvu75KcgABAT6L',
            name: 'Joel Gascoigne',
            handle: '@joelgascogine',
            profileImageUrl: 'http://i.pravatar.cc/64?img=60',
          },
          onItemClick: () => console.info('Assigned Clicked'),
          badges: 123,
        },
        {
          _id: '1c',
          user: {
            id: 'W_Lvu75KcgABAT6L',
            name: 'Joel Gascoigne',
            handle: '@joelgascogine',
            profileImageUrl: 'http://i.pravatar.cc/64?img=60',
          },
          onItemClick: () => console.info('Assigned Clicked'),
          badges: 123,
          selected: true,
        },
      ],
    },
  ];

  // const footerMock = [
  //   {
  //     id: 'W_Lvu75KcgABAT6L',
  //     name: 'Juliana Gomez',
  //     orgId: 'ap2f',
  //     profileImageUrl: 'http://i.pravatar.cc/64?img=60',
  //   },
  //   {
  //     id: 'W_Lvu75KcgABAT6L',
  //     name: 'Juliana Gomez',
  //     orgId: 'ap2f',
  //     profileImageUrl: 'http://i.pravatar.cc/64?img=60',
  //   },
  // ];
  return <Sidebar menuItems={mock} />;
}
