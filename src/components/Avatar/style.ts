import styled, { css } from 'styled-components'
import { yellowDarker } from '../style/colors'
import { fontWeightBold, fontFamily } from '../style/fonts'

// @ts-expect-error TS(7031) FIXME: Binding element 'size' implicitly has an 'any' typ... Remove this comment to see the full error message
const getImageCss = ({ size, type = 'default' }) =>
  css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
    -webkit-mask-size: cover;
    ${type === 'social' &&
    `-webkit-mask-image: url(https://static.buffer.com/ui/avatar-mask-${size}.svg);`}
    background: url(${(props) =>
      // @ts-expect-error TS(2339) FIXME: Property 'src' does not exist on type 'ThemeProps<... Remove this comment to see the full error message
      props.src}) center no-repeat, url(${(props) =>
      // @ts-expect-error TS(2339) FIXME: Property 'fallbackUrl' does not exist on type 'The... Remove this comment to see the full error message
      props.fallbackUrl}) center no-repeat;
    background-size: ${size}px;
  `

export const image = {
  default: {
    small: getImageCss({ size: 32 }),
    medium: getImageCss({ size: 40 }),
    large: getImageCss({ size: 48 }),
  },
  social: {
    small: getImageCss({ size: 32, type: 'social' }),
    medium: getImageCss({ size: 40, type: 'social' }),
    large: getImageCss({ size: 48, type: 'social' }),
  },
}

// @ts-expect-error TS(7031) FIXME: Binding element 'size' implicitly has an 'any' typ... Remove this comment to see the full error message
const getWrapperCss = ({ size }) =>
  css`
    position: relative;
    width: ${size}px;
    height: ${size}px;
  `

export const wrapper = {
  small: getWrapperCss({ size: 32 }),
  medium: getWrapperCss({ size: 40 }),
  large: getWrapperCss({ size: 48 }),
}

// @ts-expect-error TS(7031) FIXME: Binding element 'size' implicitly has an 'any' typ... Remove this comment to see the full error message
const getObjectCss = ({ size }) =>
  css`
    border-radius: 100%;
    width: ${size}px;
    height: ${size}px;
  `

export const object = {
  small: getObjectCss({ size: 32 }),
  medium: getObjectCss({ size: 40 }),
  large: getObjectCss({ size: 48 }),
}

export const SocialIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: ${(props): string => (props.bgColor ? props.bgColor : '#777')};
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateX(8px)
    translateY(${(props): string => (props.size === 'small' ? '0' : '-2')}px);
`

export const StartPageIcon = styled.span`
  color: ${yellowDarker};
  font-size: 9px;
  font-weight: ${fontWeightBold};
  text-align: center;
  width: 16px;
  font-family: ${fontFamily};
`
