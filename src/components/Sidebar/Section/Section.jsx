import React from 'react';

import PropTypes from 'prop-types';
import { SectionStyled, StyledUnorderedList, TitleContainer } from './style';
import Text from '../../Text/Text';
import Item from '../Item/Item';

const Section = ({ menuItem }) => (
  <SectionStyled>
    <TitleContainer>
      <Text type="label">{menuItem.title}</Text>
    </TitleContainer>
    <StyledUnorderedList>
      {menuItem.items.map(item => (
        <Item item={item} />
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
