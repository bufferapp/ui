/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const CardWrapper = style.div`
    display: block;
    position: relative;
    background-color: rgb(245, 247, 249);
    margin: 32px 0px;
    padding: 24px 24px 24px 50px;
    border-left: 4px solid;
    border-radius: 3px;
    border-color: ${props => (props.color === 'green' ? '#26cb7c' : props.color === 'red' ? '#ff504b' : '#f77d05')}
`;

const CardIcon = style.div`
  color: ${props => (props.color === 'green' ? '#26cb7c' : props.color === 'red' ? '#ff504b' : '#f77d05')}
`;

const CardTitle = style.div`
  font-size: 16px;  
  position: relative;
  margin: 0px;
  margin-bottom: 24px;
  color: inherit;
  font-weight 700;
`;

const CardDescription = style.p`
  font-size: 14px;
`;

const InfoCard = ({ color, title, children }) => (
  <CardWrapper color={color}>
    <CardIcon color={color} />
    {title && <CardTitle>{title}</CardTitle>}
    <CardDescription>{children}</CardDescription>
  </CardWrapper>
);

InfoCard.defaultProps = {
  title: null,
  children: '',
};

InfoCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default InfoCard;
