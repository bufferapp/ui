import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  grayLighter,
  grayDark,
  blueDarker,
  green,
  white,
} from '../../style/colors'

import { fontWeightMedium, fontFamily, fontSizeSmall } from '../../style/fonts'

const StyledNavBarProducts = styled.nav`
  display: flex;
  position: relative;
  z-index: 2;
`

const ProductLink = styled.a`
  height: 100%;
  display: flex;
  color: #fff;
  padding: 0 24px;
  font-size: 16px;
  text-decoration: none;
  align-items: center;
  color: ${(props) => (props.active ? blueDarker : grayDark)};
  background-color: ${(props) => (props.active ? grayLighter : 'transparent')};
  &:hover {
    color: ${(props) => (props.active ? blueDarker : grayDark)};
    background-color: ${grayLighter};
  }
  & svg {
    filter: grayscale(1) contrast(0.5);
    filter: ${(props) =>
      props.active ? 'grayscale(0) contrast(1)' : 'grayscale(1) contrast(.5)'};
  }
`

const ProductText = styled.span`
  font-family: ${fontFamily};
  font-weight: ${fontWeightMedium};
  margin-left: 8px;
  text-transform: capitalize;
`

const NewLabel = styled.span`
  color: ${white};
  font-family: ${fontFamily};
  font-weight: ${fontWeightMedium};
  font-size: ${fontSizeSmall};
  background: ${green};
  border-radius: 12px;
  padding: 2px 8px;
  margin-left: 8px;
  margin-top: 2px;
`

// Notee: Custom SVGs to support multi-color product icons (instead of using icon component)
const PublishLogo = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.38324 6.40009L10.3798 10.407V16.0001L0.771271 6.40009H6.38324Z"
      fill="#132062"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9979 13.5234V0H3.47618L16.9979 13.5234Z"
      fill="#6B81FF"
    />
  </svg>
)

const AnalyzeLogo = () => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.1336 2.8703C3.28309 2.8703 0.167206 6.03021 0.167206 9.93515C0.167206 13.8401 3.28309 17 7.1336 17C10.9841 17 14.1 13.8401 14.1 9.93515H7.1336V2.8703Z"
      fill="#F3AFB9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 8.00839C16 4.10346 12.8841 0.943542 9.0336 0.943542V8.00839H16Z"
      fill="#132062"
    />
  </svg>
)

const EngageLogo = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 9.03754H8.9274V16H16V9.03754Z" fill="#132062" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H13.8055V6.94855H6.83673V13.911L0 13.925V0Z"
      fill="#87C221"
    />
  </svg>
)

const getLogo = (product) => {
  switch (product) {
    case 'analyze':
      return <AnalyzeLogo />
    case 'publish':
      return <PublishLogo />
    case 'engage':
      return <EngageLogo />
    default:
      return null
  }
}

const NavBarProducts = ({ products, activeProduct }) => (
  <StyledNavBarProducts>
    {products.map(({ id, href, isNew }) => (
      <ProductLink
        active={activeProduct === id}
        href={href}
        key={id}
        id={`product-${id}`}
      >
        {getLogo(id)}
        <ProductText>{id}</ProductText>
        {isNew && (
          <NewLabel aria-label="This is a new product! Give it a try!">
            New!
          </NewLabel>
        )}
      </ProductLink>
    ))}
  </StyledNavBarProducts>
)

NavBarProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isNew: PropTypes.bool,
      href: PropTypes.string,
    }),
  ),

  activeProduct: PropTypes.oneOf(['publish', 'analyze', 'engage']),
}

NavBarProducts.defaultProps = {
  products: [],
  activeProduct: undefined,
}

export default NavBarProducts
