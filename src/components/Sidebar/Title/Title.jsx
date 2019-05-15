import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const TitleStyled = styled.div`
  ${Styles.base}
`;

const Title = ({ heading }) => <TitleStyled>{heading}</TitleStyled>;

Title.propTypes = {
  heading: PropTypes.string,
};

Title.defaultProps = {
  heading: '',
};

export default Title;
