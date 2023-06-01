import React from 'react'
import Input from './Input'

// This is a bit ugly but we need it otherwise automatic snapshots tests will fail
export default React.forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
))
