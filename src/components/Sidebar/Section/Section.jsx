import React from 'react';

import PropTypes from 'prop-types';
import { SectionStyled } from './style';
import Title from '../Title/Title';
import Item from '../Item/Item';

const Section = ({ menuItem }) => (
  <SectionStyled>
    <Title heading={menuItem.title} />
    <ul>
      {menuItem.items.map(item => (
        <Item item={item.title} />
      ))}
    </ul>
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
