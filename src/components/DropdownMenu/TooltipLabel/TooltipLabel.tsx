import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  font-size: 13px;
  height: 14px;
  line-height: 14px;
  width: 100%;
  max-width: 160px;
  padding-top: 4px;
  padding-bottom: 4px;
`

export const Label = styled.div`
  width: 127px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: ${(props): string =>  
// @ts-expect-error TS(2322) FIXME: Type 'string | number' is not assignable to type '... Remove this comment to see the full error message
 (props.hasIcon ? '7px' : 0)};
`

export const EmptyLabel = styled.div`
  white-space: break-spaces;
  padding-top: 50px;
  padding-bottom: 50px;
  height: auto;
`

// @ts-expect-error TS(7031) FIXME: Binding element 'items' implicitly has an 'any' ty... Remove this comment to see the full error message
const TooltipLabel = ({ items, maxItems, defaultMessage }) => {
  if (!items && !defaultMessage) return null

  const totalItems = items.length
  const exceedsTotal = totalItems > maxItems
  const remainingItems = totalItems - maxItems

  return (
    <>
      {/* @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type. */}
      {items.slice(0, maxItems).map((item, index) => (
        <LabelWrapper key={`tooltip-item-${index}`}>
          {item.icon}
          {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
          <Label hasIcon>{item.title}</Label>
        </LabelWrapper>
      ))}
      {items.length === 0 && (
        <LabelWrapper>
          <EmptyLabel>{defaultMessage}</EmptyLabel>
        </LabelWrapper>
      )}
      {exceedsTotal && (
        <LabelWrapper>
          <Label>{`Plus ${remainingItems} more...`}</Label>
        </LabelWrapper>
      )}
    </>
  )
}

TooltipLabel.propTypes = {
  /** Items list to display in the tooltip */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.node,
    }),
  ),
  defaultMessage: PropTypes.string,
}

TooltipLabel.defaultProps = {
  items: [],
  defaultMessage: null,
}

export default TooltipLabel
