import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'
import { HelpTextWrapper, HelpText } from '../Input/style'
import { Warning } from '../Icon'
import { Container, StyledTextArea } from './style'

export default class TextArea extends React.Component {
  render() {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
      value,
      // @ts-expect-error TS(2339) FIXME: Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
      label,
      // @ts-expect-error TS(2339) FIXME: Property 'hasError' does not exist on type 'Readon... Remove this comment to see the full error message
      hasError,
      // @ts-expect-error TS(2339) FIXME: Property 'help' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      help,
      // @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error TS(2339) FIXME: Property 'rows' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      rows,
      // @ts-expect-error TS(2339) FIXME: Property 'onChange' does not exist on type 'Readon... Remove this comment to see the full error message
      onChange,
      // @ts-expect-error TS(2339) FIXME: Property 'id' does not exist on type 'Readonly<{}>... Remove this comment to see the full error message
      id,
      // @ts-expect-error TS(2339) FIXME: Property 'fullHeight' does not exist on type 'Read... Remove this comment to see the full error message
      fullHeight,
      // @ts-expect-error TS(2339) FIXME: Property 'forwardRef' does not exist on type 'Read... Remove this comment to see the full error message
      forwardRef,
      ...props
    } = this.props
    return (
      <Container>
        <Text htmlFor={id} type="label">
          {label}
        </Text>
        <StyledTextArea
          id={id}
          {...props}
          hasError={hasError}
          disabled={disabled}
          rows={rows > 20 ? 20 : rows}
          value={value}
          onChange={onChange}
          fullHeight={fullHeight}
          ref={forwardRef}
        />
        {hasError && (
          <HelpTextWrapper>
            <Warning size="medium" />
            <HelpText type="help" htmlFor={id} hasError={hasError}>
              {help}
            </HelpText>
          </HelpTextWrapper>
        )}
      </Container>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
TextArea.propTypes = {
  /** It adds a label on top of the textarea box. */
  label: PropTypes.string.isRequired,
  /** It's the placeholder value of the textarea. */
  placeholder: PropTypes.string,
  /** It colors the field in red. */
  hasError: PropTypes.bool,
  /** It disables the textarea field. */
  disabled: PropTypes.bool,
  /** The onChange event */
  onChange: PropTypes.func.isRequired,
  /** Number of rows, max 20 */
  rows: PropTypes.number,
  /** The id to link the textarea with the label */
  id: PropTypes.string.isRequired,
  /** If the textarea should take the height of the parent div */
  fullHeight: PropTypes.bool,
  /**
   * this consumed by the default export that is wrapping the component into a ForwardRef
   * @ignore
   */
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
TextArea.defaultProps = {
  placeholder: undefined,
  hasError: false,
  disabled: false,
  rows: 4,
  fullHeight: false,
  forwardRef: undefined,
}
