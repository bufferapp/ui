import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  font-size: 13px;
  height: 14px;
  line-height: 14px;
  width: 100%;
  margin: ${props => {
    const { isFirstLabel, isLastLabel } = props;
    if (isFirstLabel) return '5px 0px 10px 0px';
    if (isLastLabel) return '10px 0px 5px 0px';
    return '10px 0';
  }};
`;

export const Label = styled.div`
  width: 127px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: ${props => (props.hasIcon ? '7px' : 0)};
`;

const TooltipLabel = ({ items, maxItems }) => {
  if (!items) return null;

  const totalItems = items.length;
  const exceedsTotal = totalItems > maxItems;
  const remainingItems = totalItems - maxItems;

  return (
    <>
      {items.slice(0, maxItems).map((item, index) => {
        const isFirstLabel = index === 0;
        const isLastLabel = (index === items.length - 1) && !exceedsTotal;
        return (
          <LabelWrapper
            key={`tooltip-item-${index}`}
            isFirstLabel={isFirstLabel}
            isLastLabel={isLastLabel}
          >
            {item.icon}
            <Label hasIcon>{item.title}</Label>
          </LabelWrapper>
        )
      })}
      {exceedsTotal && (
        <LabelWrapper isLastLabel>
          <Label>{`Plus ${remainingItems} more...`}</Label>
        </LabelWrapper>
      )}
    </>
  );
};

TooltipLabel.propTypes = {
  /** Items list to display in the tooltip */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.node,
    })
  ).isRequired,
};

export default TooltipLabel;
