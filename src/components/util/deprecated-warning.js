/* eslint-disable no-console */
import { useEffect } from 'react';

function useDeprecatedWarning(msg) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`❌ Deprecation Warning`, msg);
    }
  }, []);
}

export default useDeprecatedWarning;
