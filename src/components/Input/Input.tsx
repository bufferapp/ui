import React from 'react'

import PropTypes from 'prop-types'
import * as Styles from './style'
import { Warning } from '../Icon'
import Text from '../Text'

export default class Input extends React.Component {
  render() {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error TS(2339) FIXME: Property 'hasError' does not exist on type 'Readon... Remove this comment to see the full error message
      hasError,
      // @ts-expect-error TS(2339) FIXME: Property 'help' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      help,
      // @ts-expect-error TS(2339) FIXME: Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
      label,
      // @ts-expect-error TS(2339) FIXME: Property 'maxLength' does not exist on type 'Reado... Remove this comment to see the full error message
      maxLength,
      // @ts-expect-error TS(2339) FIXME: Property 'id' does not exist on type 'Readonly<{}>... Remove this comment to see the full error message
      id,
      // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      name,
      // @ts-expect-error TS(2339) FIXME: Property 'onChange' does not exist on type 'Readon... Remove this comment to see the full error message
      onChange,
      // @ts-expect-error TS(2339) FIXME: Property 'onBlur' does not exist on type 'Readonly... Remove this comment to see the full error message
      onBlur,
      // @ts-expect-error TS(2339) FIXME: Property 'onKeyUp' does not exist on type 'Readonl... Remove this comment to see the full error message
      onKeyUp,
      // @ts-expect-error TS(2339) FIXME: Property 'prefix' does not exist on type 'Readonly... Remove this comment to see the full error message
      prefix,
      // @ts-expect-error TS(2339) FIXME: Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
      placeholder,
      // @ts-expect-error TS(2339) FIXME: Property 'size' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      size,
      // @ts-expect-error TS(2339) FIXME: Property 'type' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      type,
      // @ts-expect-error TS(2339) FIXME: Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
      value,
      // @ts-expect-error TS(2339) FIXME: Property 'forwardedRef' does not exist on type 'Re... Remove this comment to see the full error message
      forwardedRef,
      // @ts-expect-error TS(2339) FIXME: Property 'required' does not exist on type 'Readon... Remove this comment to see the full error message
      required,
      // @ts-expect-error TS(2339) FIXME: Property 'icon' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      icon,
    } = this.props
    return (
      <Styles.InputWrapper>
        {label.length > 0 && (
          <Text htmlFor={id} type="label">
            {label}
          </Text>
        )}
        {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
        <Styles.InputFieldWrapper prefix={prefix} size={size}>
          {icon && !prefix && <Styles.StyledIcon>{icon}</Styles.StyledIcon>}
          <Styles.InputStyled
            disabled={disabled}
            // @ts-expect-error TS(2769) FIXME: No overload matches this call.
            hasError={hasError}
            maxLength={maxLength}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
            prefix={prefix}
            placeholder={placeholder}
            type={type}
            size={size}
            value={value}
            ref={forwardedRef}
            required={required}
            aria-required={required ? true : undefined}
            icon={icon}
          />
        </Styles.InputFieldWrapper>
        {help.length > 0 && (
          <Styles.HelpTextWrapper>
            {hasError && <Warning size="medium" />}
            <Styles.HelpText type="help" htmlFor={name} hasError={hasError}>
              {help}
            </Styles.HelpText>
          </Styles.HelpTextWrapper>
        )}
      </Styles.InputWrapper>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Input.propTypes = {
  /** It disables the input field. </i> */
  disabled: PropTypes.bool,
  /** It colors the field in red. */
  hasError: PropTypes.bool,
  /** Marks the input as required */
  required: PropTypes.bool,
  /** It adds an help text below the input box. */
  help: PropTypes.string,
  /** Id to link label with input for a11y */
  id: PropTypes.string,
  /** It adds a label on top of the input box. Make sure you also add an id for a11y */
  label: PropTypes.string,
  /** It adds a maxlength option for the input. */
  maxLength: PropTypes.string,
  /** It's the name of the input. */
  name: PropTypes.string.isRequired,
  /** It's the placeholder value of the input. */
  placeholder: PropTypes.string,
  /** Optional object describing fixed text that is placed inside the input, format is `{ text: '@', paddingLeft: '30px' }` */
  prefix: PropTypes.shape({
    text: PropTypes.string.isRequired,
    paddingLeft: PropTypes.string.isRequired,
  }),
  /** The onChange event */
  onChange: PropTypes.func.isRequired,
  /** The onBlur event */
  onBlur: PropTypes.func,
  /** The onKeyUp event */
  onKeyUp: PropTypes.func,
  /** This is the vertical size of the input field, can be `small`, `regular`, or `tall` */
  size: PropTypes.string,
  /** The type of the input */
  type: PropTypes.string,
  /** The value of the input */
  value: PropTypes.string,
  /** The value of the icon */
  icon: PropTypes.node,
  /**
   * this consumed by the default export that is wrapping the component into a ForwardRef
   * @ignore
   */
  forwardedRef: PropTypes.shape({ current: PropTypes.any }),
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Input.defaultProps = {
  disabled: false,
  hasError: false,
  required: false,
  help: '',
  id: '',
  label: '',
  placeholder: '',
  size: 'regular',
  type: 'text',
  value: undefined,
  onBlur: () => {},
  onKeyUp: () => {},
  forwardedRef: undefined,
  prefix: null,
  maxLength: undefined,
  icon: undefined,
}
