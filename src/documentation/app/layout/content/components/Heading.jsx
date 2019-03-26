import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
    margin: 0px;
    padding: 0px 0px 40px 0px;
    flex: auto;
    display: flex;
`;

const Text = styled.h2`
    display: block;
    margin: 0px;
    flex: 1 1 auto;
    font-size: 40px;
    line-height: 1.5;
    font-weight: 600;
`;

const Header = styled.div`
    display: block;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid #E6ECF1;
    margin-bottom: 32px;
`;

/** Page H1 Heading */
const Heading = ({ text }) => (
  <Header>
    <Title>
      <Text>{text}</Text>
    </Title>
  </Header>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
