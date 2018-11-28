import React from 'react';
import Button from '@bufferapp/components/Button';

/** Secondary type buttons */
export default function ExampleSecondary() {
  return [
    <Button type="secondary" size="large" onClick={() => {}}>Secondary Large</Button>,
    <Button type="secondary" onClick={() => {}}>Secondary Button</Button>,
    <Button type="secondary" size="small" onClick={() => {}}>Secondary Button</Button>,
  ];
}
