import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainListItem = styled.li`
  list-style: none;
`

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const CarouselItems = ({ children, currentSlideIndex }) => {
  const items = React.Children.map(children, (child, index) => (
    <MainListItem key={index} aria-hidden={currentSlideIndex !== index}>
      {child}
    </MainListItem>
  ))

  return items
}

CarouselItems.propTypes = {
  /** The content within the carousel */
  children: PropTypes.node.isRequired,

  /** The normalized width for each item */
  currentSlideIndex: PropTypes.number.isRequired,
}

export default CarouselItems
