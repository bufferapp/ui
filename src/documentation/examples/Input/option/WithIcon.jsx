import React from 'react';
import Input from '@bufferapp/ui/Input';
import SearchIcon from '@bufferapp/ui/Icons/Search';

/** Input with icon */
export default function ExampleInput() {
  return (
    <Input
      onChange={() => {}}
      name="foo"
      placeholder="Search channels"
      icon={<SearchIcon size="large" />}
    />
  );
}
