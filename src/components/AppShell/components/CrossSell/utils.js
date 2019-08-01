const PRODUCT_PUBLISH = 'publish'
const PRODUCT_ANALYZE = 'analyze'
const PRODUCT_REPLY = 'reply'

/**
 *
 */
export const getStartTrialUrl = (product, environment = 'production') => {
  const loginUrl = getProductUrl('login', environment)
  const signupUrl = `${loginUrl}/signup`

  switch (product) {
    case PRODUCT_REPLY: {
      const params = {
        product,
        plan: 'business',
        cycle: 'month',
        cta: 'replyApp-appShell-crossSell-startTrial-1',
      }

      return `${signupUrl}${getFilteredQueryParams(params)}`
    }
    case PRODUCT_ANALYZE:
      const params = {
        product,
        cta: 'analyzeApp-appShell-crossSell-startTrial-1',
      }
      return `${signupUrl}${getFilteredQueryParams(params)}`
      return
    case PRODUCT_PUBLISH:
    default:
      return null
  }
}

/**
 *
 */
export const getProductUrl = (product, environment) => {
  if (!product) return null

  if (environment === 'production') {
    return `https://${product}.buffer.com`
  } else if (environment === 'staging') {
    return product === PRODUCT_REPLY
      ? `https://app-${product}.dev.buffer.com` // Reply is special :)
      : `https://${product}.dev.buffer.com`
  } else {
    return `https://${product}.local.buffer.com`
  }
}

/**
 *
 */
export const getFilteredQueryParams = (queryParams = {}) => {
  const filteredQueryParams = Object.keys(queryParams)
    .filter(key => queryParams[key])
    .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join('&')
  return filteredQueryParams ? `?${filteredQueryParams}` : ''
}
