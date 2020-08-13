import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import { borderRadius } from '../style/borders';
import { fontSize } from '../style/fonts';
import Warning from '../Icon/Icons/Warning';
import Cross from '../Icon/Icons/Cross';
import { grayDark, grayLighter, grayDarker } from '../style/colors';

const colorMap = {
  warning: {
    border: '#a59638',
    background: '#fdf8d8',
    color: '#625920',
  },
  note: {
    border: grayDark,
    background: grayLighter,
    color: grayDarker,
  },
};

const NoticeWrapper = styled.div`
  border: ${props => `1px solid ${colorMap[props.type].border}`};
  color: ${props => colorMap[props.type].color};
  background: ${props => colorMap[props.type].background};
  border-radius: ${borderRadius};
  font-size: ${fontSize};
  padding: 16px 16px;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

const WarningIcon = styled(Warning)`
  display: block;
  margin-right: 12px;
  flex: 1 0 auto;
  max-width: 16px;
`;

const CloseButton = styled.button`
  color: ${props => colorMap[props.type].color};
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  opacity: 0.8;
  height: 16px;
  position: absolute;
  right: 16px;
  &:hover {
    color: ${props => colorMap[props.type].color};
    opacity: 1;
    cursor: pointer;
  }
`;

function Notice({ children, dismiss, type }) {
  return (
    <NoticeWrapper type={type}>
      {type === 'warning' && <WarningIcon />}
      <Text>{children}</Text>
      {dismiss && (
        <CloseButton type={type} onClick={() => dismiss()}>
          <Cross />
        </CloseButton>
      )}
    </NoticeWrapper>
  );
}

Notice.propTypes = {
  children: PropTypes.node.isRequired,
  dismiss: PropTypes.func,
  /** can be warning, note */
  type: PropTypes.string.isRequired,
};

Notice.defaultProps = {
  dismiss: null,
};

export default Notice;
