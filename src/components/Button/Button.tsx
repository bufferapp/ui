import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as Styles from './style'
import ChevronDown from '../Icon/Icons/ChevronDown'
import Select from '../Select/Select'

/*
Since buttons keep their own inline-block display type, we can only imitate this by using a wrapper (with
 `display: inline-block`) an internal container (with `display: flex`), and then the actual contents (including real
  buttons
 */

export const ButtonWrapperStyled = styled.div`
  ${Styles.ButtonWrapperBase};
  ${(props) =>
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    Styles[[props.type, props.disabled ? 'Disabled' : ''].join('')]};
  ${(props): string =>  
// @ts-expect-error TS(2322) FIXME: Type 'FlattenSimpleInterpolation | ""' is not assi... Remove this comment to see the full error message
 (props.fullWidth ? Styles.fullWidth : '')};
`

export const ButtonContainerStyled = styled.div`
  ${Styles.ButtonContainerBase};
`

export const ButtonStyled = styled.button`
  ${Styles.ButtonNestedBase};
  ${(props) =>
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    Styles[props.size]};
  ${(props) =>
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    Styles[props.disabled ? 'disabled' : '']};
  ${(props): string =>  
// @ts-expect-error TS(2322) FIXME: Type 'FlattenSimpleInterpolation | ""' is not assi... Remove this comment to see the full error message
 (props.fullWidth ? Styles.fullWidth : '')};
`

const Loading = styled.img`
  width: 24px;
  margin-left: 10px;
`

const VisuallyHiddenLabel = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`

/** All buttons, including text and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */
const Button = ({
  // @ts-expect-error TS(7031) FIXME: Binding element 'disabled' implicitly has an 'any'... Remove this comment to see the full error message
  disabled,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onClick' implicitly has an 'any' ... Remove this comment to see the full error message
  onClick,
  // @ts-expect-error TS(7031) FIXME: Binding element 'type' implicitly has an 'any' typ... Remove this comment to see the full error message
  type,
  // @ts-expect-error TS(7031) FIXME: Binding element 'size' implicitly has an 'any' typ... Remove this comment to see the full error message
  size,
  // @ts-expect-error TS(7031) FIXME: Binding element 'label' implicitly has an 'any' ty... Remove this comment to see the full error message
  label,
  // @ts-expect-error TS(7031) FIXME: Binding element 'isSplit' implicitly has an 'any' ... Remove this comment to see the full error message
  isSplit,
  // @ts-expect-error TS(7031) FIXME: Binding element 'loading' implicitly has an 'any' ... Remove this comment to see the full error message
  loading,
  // @ts-expect-error TS(7031) FIXME: Binding element 'icon' implicitly has an 'any' typ... Remove this comment to see the full error message
  icon,
  // @ts-expect-error TS(7031) FIXME: Binding element 'iconEnd' implicitly has an 'any' ... Remove this comment to see the full error message
  iconEnd,
  // @ts-expect-error TS(7031) FIXME: Binding element 'hasIconOnly' implicitly has an 'a... Remove this comment to see the full error message
  hasIconOnly,
  // @ts-expect-error TS(7031) FIXME: Binding element 'isSelect' implicitly has an 'any'... Remove this comment to see the full error message
  isSelect,
  // @ts-expect-error TS(7031) FIXME: Binding element 'items' implicitly has an 'any' ty... Remove this comment to see the full error message
  items,
  // @ts-expect-error TS(7031) FIXME: Binding element 'selectPosition' implicitly has an... Remove this comment to see the full error message
  selectPosition,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onSelectClick' implicitly has an ... Remove this comment to see the full error message
  onSelectClick,
  // @ts-expect-error TS(7031) FIXME: Binding element 'fullWidth' implicitly has an 'any... Remove this comment to see the full error message
  fullWidth,
  // @ts-expect-error TS(7031) FIXME: Binding element 'tooltip' implicitly has an 'any' ... Remove this comment to see the full error message
  tooltip,
  // @ts-expect-error TS(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
  ref,
  // @ts-expect-error TS(7031) FIXME: Binding element 'hideSearch' implicitly has an 'an... Remove this comment to see the full error message
  hideSearch,
  // @ts-expect-error TS(7031) FIXME: Binding element 'textToLeft' implicitly has an 'an... Remove this comment to see the full error message
  textToLeft,
  // @ts-expect-error TS(7031) FIXME: Binding element 'className' implicitly has an 'any... Remove this comment to see the full error message
  className,
  // @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
  children,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onOpen' implicitly has an 'any' t... Remove this comment to see the full error message
  onOpen,
  ...props
}) => (
  <ButtonWrapperStyled
    className={className}
    // @ts-expect-error TS(2769) FIXME: No overload matches this call.
    disabled={disabled}
    type={type}
    fullWidth={fullWidth}
    $loading={loading}
  >
    <ButtonContainerStyled>
      <ButtonStyled
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        isSplit={isSplit}
        icon={icon}
        hasIconOnly={hasIconOnly}
        data-tip={tooltip}
        ref={ref}
        aria-haspopup="false"
        size={size}
        fullWidth={fullWidth}
        type={type}
        {...props}
      >
        {!iconEnd && icon}
        {hasIconOnly && <VisuallyHiddenLabel>{label}</VisuallyHiddenLabel>}
        {!hasIconOnly && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <Styles.ButtonLabel hasIcon={!!icon} iconEnd={!!iconEnd}>
            {label}
          </Styles.ButtonLabel>
        )}
        {iconEnd && icon}

        {isSelect && (type === 'primary' || type === 'secondary') && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <Styles.ButtonArrow textToLeft={textToLeft}>
            <ChevronDown
              color={type === 'primary' ? 'white' : 'grayDark'}
              size={size}
              isChevron
            />
          </Styles.ButtonArrow>
        )}

        {loading && <Loading src="./images/loading-gray.svg" alt="loading" />}
      </ButtonStyled>
      {isSplit &&
        (type === 'primary' || type === 'secondary') &&
        (children ? (
          React.Children.map(children, (child) => React.cloneElement(child, {}))
        ) : (
          <Select
            // @ts-expect-error TS(2769) FIXME: No overload matches this call.
            onSelectClick={onSelectClick}
            items={items}
            type={type}
            size={size}
            isSplit
            yPosition={selectPosition}
            xPosition="right"
            disabled={disabled}
            hideSearch={hideSearch}
            onOpen={onOpen}
          />
        ))}
    </ButtonContainerStyled>
  </ButtonWrapperStyled>
)

Button.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** OnClick handler */
  onClick: PropTypes.func.isRequired,

  /** Button label */
  label: PropTypes.string,

  /** Type of button */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'text',
    'error',
    'danger',
    'orange',
  ]),

  /** Is the Button Split  */
  isSplit: PropTypes.bool,

  /** Is this the Select button with chevron */
  isSelect: PropTypes.bool,

  /** Is the Button Loading  */
  loading: PropTypes.bool,

  /** Does the button have only an icon and no label */
  hasIconOnly: PropTypes.bool,

  /** Icon to show with the label */
  icon: PropTypes.node,

  /** Icon to show with the label */
  iconEnd: PropTypes.bool,

  /** Items to display in the Split Button popup */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),

  /** Child element(s) to use for custom Split Button child content */
  children: PropTypes.element,

  /** Position of the Select popup */
  selectPosition: PropTypes.oneOf(['top', 'bottom']),

  /** Function to call on Split Button selected item click */
  onSelectClick: PropTypes.func,

  /** Is the button the full width of the parent container */
  fullWidth: PropTypes.bool,

  /** Tooltip to show on the component */
  tooltip: PropTypes.string,

  /** The prop to get the DOM element of the Button */
  ref: PropTypes.node,

  /** Is search hidden */
  hideSearch: PropTypes.bool,

  /** class passed by the dom element */
  className: PropTypes.string,

  /** onOpen function to fire when the Dropdown menu is open */
  onOpen: PropTypes.func,
}

Button.defaultProps = {
  disabled: false,
  isSplit: undefined,
  loading: false,
  size: 'medium',
  type: 'secondary',
  label: undefined,
  hasIconOnly: false,
  icon: undefined,
  iconEnd: false,
  isSelect: undefined,
  items: undefined,
  selectPosition: 'bottom',
  onSelectClick: undefined,
  fullWidth: false,
  tooltip: undefined,
  ref: undefined,
  hideSearch: true,
  className: undefined,
  children: undefined,
  onOpen: null,
}

export default Button
