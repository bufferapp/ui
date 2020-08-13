import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import { borderRadius } from '../style/borders';
import { fontSize } from '../style/fonts';
import Warning from '../Icon/Icons/Warning';
import Cross from '../Icon/Icons/Cross';

const NoticeWrapper = styled.div`
  border: 1px solid #a59638;
  color: #625920;
  background: #fdf8d8;
  border-radius: ${borderRadius};
  font-size: ${fontSize};
  padding: 16px 16px;
  display: flex;
  position: relative;
`;

const WarningIcon = styled(Warning)`
  display: block;
  margin-right: 12px;
`;

const CloseButton = styled.button`
  color: #625920;
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  opacity: 0.8;
  height: 16px;
  position: absolute;
  right: 16px;
  &:hover {
    color: #625920;
    opacity: 1;
    cursor: pointer;
  }
`;

function Notice({ children, dismiss }) {
  return (
    <NoticeWrapper>
      <WarningIcon />
      <Text>{children}</Text>
      <CloseButton onClick={() => dismiss()}>
        <Cross />
      </CloseButton>
    </NoticeWrapper>
  );
}

Notice.propTypes = {
  children: PropTypes.node.isRequired,
  dismiss: PropTypes.func,
};

Notice.defaultProps = {
  dismiss: null,
};

export default Notice;
