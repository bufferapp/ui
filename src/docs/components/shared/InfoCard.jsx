import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const CardWrapper = style.div`
    display: block;
    position: relative;
    background-color: rgb(245, 247, 249);
    margin: 32px 0px;
    padding: 24px 24px calc(0.1px) 50px;
    border-left: 4px solid;
    border-radius: 3px;
    border-color: rgb(247, 125, 5);
`;

const CardIcon = style.div`
  color: ${props => (props.type === 'success' ? 'green' : 'red')}
`;

const CardTitle = style.div`
  font-size: 14px;  
  position: relative;
  margin: 0px;
  margin-bottom: 24px;
  color: inherit;
`;

const InfoCard = ({ children }) => (
  <CardWrapper>
    <CardIcon type="success" />
    <CardTitle>{children}</CardTitle>
  </CardWrapper>
);

InfoCard.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InfoCard;
