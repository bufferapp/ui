import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const MediaWrapper = styled.div<{ size: string }>`
  width: ${(props): string => (props.size === 'large' ? '420px' : '300px')};
  height: ${(props): string => (props.size === 'large' ? '280px' : '200px')};
`

const HeaderWrapper = styled.div`
  h2 {
    max-width: 700px;
    overflow: hidden;
    margin-top: 16px;
    margin-bottom: 8px;
    text-align: center;
  }

  h3 {
    max-width: 400px;
    overflow: hidden;
    margin-top: 16px;
    margin-bottom: 8px;
    text-align: center;
  }
`

const DescriptionWrapper = styled.div<{ size: string }>`
  p {
    margin-top: 0px;
    margin-bottom: 16px;
    max-width: ${(props): string =>
      props.size === 'large' ? '500px' : '400px'};
    overflow: hidden;
    text-align: center;
  }
`

const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  div:nth-child(2) {
    margin-left: 8px;
  }
`

// @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
const StatesContext = React.createContext()

const useStatesContext = () => {
  const context = React.useContext(StatesContext)
  if (!context) {
    throw new Error(
      `States compound components cannot be rendered outside the States component`,
    )
  }
  return context
}

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const States = ({ children, size }) => (
  <StatesContext.Provider value={size}>
    <Wrapper>{children}</Wrapper>
  </StatesContext.Provider>
)

States.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
}

States.defaultProps = {
  size: 'large',
}

// @ts-expect-error TS(7031) FIXME: Binding element 'src' implicitly has an 'any' type... Remove this comment to see the full error message
const Image = ({ src, alt }) => {
  const size = useStatesContext()
  const height = size === 'large' ? 280 : 200
  const width = size === 'large' ? 420 : 300
  return (
    <div>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired, // fix this prop type later
}

Image.defaultProps = {}

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const Media = ({ children }) => {
  const size = useStatesContext()
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  return <MediaWrapper size={size}>{children}</MediaWrapper>
}

Media.propTypes = {
  children: PropTypes.node.isRequired, // fix this prop type later
}

Media.defaultProps = {}

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const Header = ({ children }) => {
  const size = useStatesContext()
  return (
    <HeaderWrapper>
      {size === 'large' && <Text type="h2">{children}</Text>}
      {size === 'small' && <Text type="h3">{children}</Text>}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired, // fix this prop type later
}

Header.defaultProps = {}

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const Description = ({ children }) => {
  const size = useStatesContext()
  return (
    // @ts-expect-error TS(2769) FIXME: No overload matches this call.
    <DescriptionWrapper size={size}>
      <Text type="p">{children}</Text>
    </DescriptionWrapper>
  )
}

Description.propTypes = {
  children: PropTypes.node.isRequired, // fix this prop type later
}

Description.defaultProps = {}

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const Buttons = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>

Buttons.propTypes = {
  children: PropTypes.node.isRequired, // fix this prop type later
}

Buttons.defaultProps = {}

States.Image = Image
States.Media = Media
States.Header = Header
States.Description = Description
States.Buttons = Buttons

export default States
