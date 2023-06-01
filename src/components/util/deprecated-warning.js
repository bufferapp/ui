/* eslint-disable no-console */
import { useEffect } from 'react'

function log(msg) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`❌ Deprecation Warning`, msg)
  }
}

/**
 * React hook for deprecation warning (for functional components)
 * @param {String} msg
 */
export function useDeprecatedWarning(msg) {
  useEffect(() => {
    log(msg)
  }, [])
}

/**
 * Print deprecation warning (for class components)
 * Call from `componentDidMount()`
 * @param {String} msg
 */
export function deprecatedWarning(msg) {
  log(msg)
}
