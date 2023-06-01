import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const LabelWrapper = styled.div `
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
`;
export const Label = styled.div `
  width: 127px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: ${(props) => (props.hasIcon ? '7px' : 0)};
`;
export const EmptyLabel = styled.div `
  white-space: break-spaces;
  padding-top: 50px;
  padding-bottom: 50px;
  height: auto;
`;
const TooltipLabel = ({ items, maxItems, defaultMessage }) => {
    if (!items && !defaultMessage)
        return null;
    const totalItems = items.length;
    const exceedsTotal = totalItems > maxItems;
    const remainingItems = totalItems - maxItems;
    return (React.createElement(React.Fragment, null,
        items.slice(0, maxItems).map((item, index) => (React.createElement(LabelWrapper, { key: `tooltip-item-${index}` },
            item.icon,
            React.createElement(Label, { hasIcon: true }, item.title)))),
        items.length === 0 && (React.createElement(LabelWrapper, null,
            React.createElement(EmptyLabel, null, defaultMessage))),
        exceedsTotal && (React.createElement(LabelWrapper, null,
            React.createElement(Label, null, `Plus ${remainingItems} more...`)))));
};
TooltipLabel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.node,
    })),
    defaultMessage: PropTypes.string,
};
TooltipLabel.defaultProps = {
    items: [],
    defaultMessage: null,
};
export default TooltipLabel;
//# sourceMappingURL=TooltipLabel.js.map