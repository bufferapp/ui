import React from 'react'

import PropTypes from 'prop-types'
import { TitleContainer } from './style'
import Text from '../Text/Text'

// @ts-expect-error TS(7031) FIXME: Binding element 'title' implicitly has an 'any' ty... Remove this comment to see the full error message
const SidebarHeader = ({ title }) => (
  <TitleContainer>
    <Text type="label">{title}</Text>
  </TitleContainer>
)

SidebarHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SidebarHeader
