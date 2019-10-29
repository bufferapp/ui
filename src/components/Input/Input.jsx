import React from 'react';

import PropTypes from 'prop-types';
import * as Styles from './style';
import { Warning } from '../Icon';
import Text from '../Text';

export default class Input extends React.Component {
  render() {
    const {
      disabled,
      hasError,
      help,
      label,
      name,
      onChange,
      onBlur,
      prefix,
      placeholder,
      size,
      type,
      value,
      forwardRef,
    } = this.props;
    return (
      <Styles.InputWrapper>
        {label.length > 0 && (
          <Text htmlFor={name} type="label">
            {label}
          </Text>
        )}
        <Styles.InputFieldWrapper prefix={prefix} size={size}>
          <Styles.InputStyled
            disabled={disabled}
            hasError={hasError}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            prefix={prefix}
            placeholder={placeholder}
            type={type}
            size={size}
            value={value}
            ref={forwardRef}
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
    );
  }
}

Input.propTypes = {
  /** It disables the input field. </i> */
  disabled: PropTypes.bool,
  /** It colors the field in red. */
  hasError: PropTypes.bool,
  /** It adds an help text below the input box. */
  help: PropTypes.string,
  /** It adds a label on top of the input box. */
  label: PropTypes.string,
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
  /** This is the vertical size of the input field, can be `small`, `regular`, or `tall` */
  size: PropTypes.string,
  /** The type of the input */
  type: PropTypes.string,
  /** The value of the input */
  value: PropTypes.string,
  /**
   * this consumed by the default export that is wrapping the component into a ForwardRef
   * @ignore
   */
  forwardRef: PropTypes.node,
};

Input.defaultProps = {
  disabled: false,
  hasError: false,
  help: '',
  label: '',
  placeholder: '',
  size: 'regular',
  type: 'text',
  value: undefined,
  onBlur: () => {},
  forwardRef: undefined,
  prefix: null,
};
