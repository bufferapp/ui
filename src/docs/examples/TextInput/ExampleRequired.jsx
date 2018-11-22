import React from 'react';
import TextInput from '@bufferapp/components/TextInput';

/** Optional Textbox */
export default function ExampleRequired() {
    return <TextInput htmlId={"example-required"}
                      label={"First Name"}
                      name={"firstname"}
                      onChange={() => {
                      }}
                      required
                      error={"First name is required"}
    />
}