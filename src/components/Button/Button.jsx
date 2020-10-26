import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Select from '../Select/Select';

/*
Since buttons keep their own inline-block display type, we can only imitate this by using a wrapper (with
 `display: inline-block`) an internal container (with `display: flex`), and then the actual contents (including real
  buttons
 */
export const ButtonWrapperStyled = styled.div`
  ${Styles.ButtonWrapperBase};
  ${props => Styles[props.disabled ? 'disabled' : props.type]};
  ${props => (props.fullWidth ? Styles.fullWidth : '')};
`;

export const ButtonContainerStyled = styled.div`
  ${Styles.ButtonContainerBase};

`;

export const ButtonStyled = styled.button`
  ${Styles.ButtonNestedBase};
  ${props => Styles[props.size]};
  ${props => (props.disabled ? Styles.disabled : '')};
  ${props => (props.fullWidth ? Styles.fullWidth : '')};
`;

const Loading = styled.img`
  width: 24px;
  margin-left: 10px;
`;

const VisuallyHiddenLabel = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */
const Button = ({
  disabled,
  onClick,
  type,
  size,
  label,
  isSplit,
  loading,
  icon,
  iconEnd,
  hasIconOnly,
  isSelect,
  items,
  selectPosition,
  onSelectClick,
  fullWidth,
  tooltip,
  ref,
  hideSearch,
  className,
  children,
}) => {
  /**
   Deprecated since version 5.27.0
   Will be deleted in version 6.0.0
   For similar behavior, use a Link component.
   Otherwise choose a different type of button.
   */
  if (type === 'link') {
    // eslint-disable-next-line
    console.warn(
      'WARNING! Obsolete Link Button. Deprecated since version 5.27.0. Will be deleted in version 6.0.0. For similar behavior, use a Link component. Otherwise choose a different type of button.'
    );
  }
  return (
    <ButtonWrapperStyled
      className={className}
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
    >
      <ButtonContainerStyled>
        <ButtonStyled
          onClick={!disabled ? onClick : undefined}
          disabled={disabled}
          isSplit={isSplit}
          icon={icon}
          hasIconOnly={hasIconOnly}
          data-tip={tooltip}
          ref={ref}
          aria-haspopup="false"
          size={size}
          fullWidth={fullWidth}
        >
          {!iconEnd && icon}
          {hasIconOnly && <VisuallyHiddenLabel>{label}</VisuallyHiddenLabel>}
          {!hasIconOnly && (
            <Styles.ButtonLabel hasIcon={!!icon} iconEnd={!!iconEnd}>
              {label}
            </Styles.ButtonLabel>
          )}
          {iconEnd && icon}

          {isSelect && (type === 'primary' || type === 'secondary') && (
            <Styles.ButtonArrow>
              <ChevronDown
                color={type === 'primary' ? 'white' : 'grayDark'}
                size={size}
                isChevron
              />
            </Styles.ButtonArrow>
          )}

          {loading && <Loading src="/images/loading-gray.svg" alt="loading" />}
        </ButtonStyled>
        {isSplit &&
          (type === 'primary' || type === 'secondary') &&
          (children ? (
            React.Children.map(children, child => React.cloneElement(child, {}))
          ) : (
            <Select
              onSelectClick={onSelectClick}
              items={items}
              type={type}
              isSplit
              yPosition={selectPosition}
              xPosition="right"
              disabled={disabled}
              hideSearch={hideSearch}
            />
          ))}
      </ButtonContainerStyled>
    </ButtonWrapperStyled>
  );
};

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
  type: PropTypes.oneOf(['link', 'primary', 'secondary', 'text', 'error']),

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
    })
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
};

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
};

export default Button;
