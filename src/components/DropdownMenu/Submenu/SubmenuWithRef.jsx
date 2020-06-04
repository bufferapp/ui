import React from 'react';
import Submenu from './Submenu';

// This is a bit ugly but we need it otherwise automatic snapshots tests will fail
export default React.forwardRef((props, ref) => (
  <Submenu {...props} forwardedRef={ref} />
));
