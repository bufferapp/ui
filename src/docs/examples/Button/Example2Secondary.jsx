import React from 'react';
import Button from '@bufferapp/components/Button';

/** Secondary type buttons */
export default function ExampleSecondary() {
    return[
        <Button secondary large onClick={()=>{}}>Secondary Large</Button>,
        <Button secondary onClick={()=>{}}>Secondary Button</Button>,
        <Button secondary small onClick={()=>{}}>Secondary Small</Button>
   ]
}