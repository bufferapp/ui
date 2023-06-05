import { createElement } from 'react'
import Icon from '../Icon'

// @ts-expect-error TS(7031) FIXME: Binding element 'content' implicitly has an 'any' ... Remove this comment to see the full error message
const createIconComponent = ({ content }) => (props) =>
  createElement(
    Icon,
    {
      ...props,
      viewBox: '0 0 16 16',
    },
    content,
  )

export default createIconComponent
