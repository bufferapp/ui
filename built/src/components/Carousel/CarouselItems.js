import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const MainListItem = styled.li `
  list-style: none;
`;
const CarouselItems = ({ children, currentSlideIndex }) => {
    const items = React.Children.map(children, (child, index) => (React.createElement(MainListItem, { key: index, "aria-hidden": currentSlideIndex !== index }, child)));
    return items;
};
CarouselItems.propTypes = {
    children: PropTypes.node.isRequired,
    currentSlideIndex: PropTypes.number.isRequired,
};
export default CarouselItems;
//# sourceMappingURL=CarouselItems.js.map