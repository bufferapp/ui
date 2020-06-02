import React from 'react';
import PopupMenu from './PopupMenu';

// This is a bit ugly but we need it otherwise automatic snapshots tests will fail
export default React.forwardRef((props, ref) => (<PopupMenu {...props} forwardedRef={ref} />));
