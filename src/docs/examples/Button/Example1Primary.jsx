import React from 'react';
import Button from '@bufferapp/components/Button';

/** Primary type buttons */
export default function ExamplePrimary() {
  return [
    <Button type="primary" size="large" onClick={() => {}}>Primary Large</Button>,
    <Button type="primary" onClick={() => {}}>Primary Button</Button>,
    <Button type="primary" size="small" onClick={() => {}}>Primary Small</Button>,
  ];
}
