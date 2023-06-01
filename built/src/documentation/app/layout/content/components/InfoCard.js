import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const CardWrapper = styled.div `
  display: block;
  position: relative;
  background-color: rgb(245, 247, 249);
  margin: 32px 0px;
  padding: 24px 24px 24px 50px;
  border-left: 4px solid;
  border-radius: 3px;
  border-color: ${(props) => props.color === 'green'
    ? '#26cb7c'
    : props.color === 'red'
        ? '#ff504b'
        : '#f77d05'};
`;
const CardIcon = styled.div `
  color: ${(props) => props.color === 'green'
    ? '#26cb7c'
    : props.color === 'red'
        ? '#ff504b'
        : '#f77d05'};
`;
const CardTitle = styled.div `
  font-size: 16px;  
  position: relative;
  margin: 0px;
  margin-bottom: 24px;
  color: inherit;
  font-weight 700;
`;
const CardDescription = styled.p `
  font-size: 14px;
`;
const InfoCard = ({ color, title, children }) => (React.createElement(CardWrapper, { color: color },
    React.createElement(CardIcon, { color: color }),
    title && React.createElement(CardTitle, null, title),
    React.createElement(CardDescription, null, children)));
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
//# sourceMappingURL=InfoCard.js.map