/* eslint-disable no-console */
import { useEffect } from 'react'

// @ts-expect-error TS(7006) FIXME: Parameter 'msg' implicitly has an 'any' type.
function log(msg) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`❌ Deprecation Warning`, msg)
  }
}

/**
 * React hook for deprecation warning (for functional components)
 * @param {String} msg
 */
// @ts-expect-error TS(7006) FIXME: Parameter 'msg' implicitly has an 'any' type.
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
// @ts-expect-error TS(7006) FIXME: Parameter 'msg' implicitly has an 'any' type.
export function deprecatedWarning(msg) {
  log(msg)
}
