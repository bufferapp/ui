import React from 'react';
import ProgressBar from '@bufferapp/ui/ProgressBar';

/** Full Width Progress Bar */
export default function ExampleProgressBar() {
  return (
    <div style={{ position: 'relative' }}>
      <ProgressBar progress="25%" fullWidth />
    </div>
  );
}
