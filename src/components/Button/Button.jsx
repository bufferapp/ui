import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './style';


/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */
const Button = ({ children,
                    disabled,
                    onClick,
                    primary,
                    primarySplit,
                    link,
                    secondary,
                    large,
                    text,
                    small,
                    label }) => {
	return (
        <ButtonStyled
            onClick={onClick}
            disabled={disabled}
            primary={primary}
            primarySplit={primarySplit}
            link={link}
            text={text}
            secondary={secondary}
            large={large}
            small={small}
            aria-label={label || null}
        >
            {children}
        </ButtonStyled>
		);
}

Button.propTypes = {
    /** Children node */
    children: PropTypes.node.isRequired,

    /** Is the button disabled */
    disabled: PropTypes.bool,

    /** Is the Button large */
    large: PropTypes.bool,

    /** Is the Button primary */
    primary: PropTypes.bool,

    /** OnClick handler */
    onClick: PropTypes.func.isRequired,

    /** Is the Button secondary */
    secondary: PropTypes.bool,

    /** Is it a text button */
    text: PropTypes.bool,

    /** Is the Button small in size */
    small: PropTypes.bool,

    /** Does the button have a split section */
    primarySplit: PropTypes.bool,

    /** Button label for accessibility */
    label: PropTypes.string,

    /** Is it a Link button */
    link: PropTypes.bool,
};


Button.defaultProps = {
    primary: false,
    disabled: false,
    link: false,
    secondary: false,
    text: false,
    primarySplit: false,
    small: false,
    large: false
};


export default Button;