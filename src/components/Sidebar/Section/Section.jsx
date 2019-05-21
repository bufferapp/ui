import React from 'react';

import PropTypes from 'prop-types';
import { SectionStyled, StyledUnorderedList } from './style';
// import Text from '../../Text/Text';
import Item from '../Item/Item';
// import ChevronDownIcon from '../../Icon/Icons/ChevronDown';
// import gray from '../../style/colors';

const Section = ({ menuItem }) => (
  <SectionStyled>
    {/* <TitleContainer>
      <Text type="label">{menuItem.title}</Text>
      <ChevronDownIcon size="large" color={gray} />
    </TitleContainer> */}
    <StyledUnorderedList>
      {menuItem.items.map(item => (
        <Item item={item.title} />
      ))}
    </StyledUnorderedList>
  </SectionStyled>
);

Section.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Section;
