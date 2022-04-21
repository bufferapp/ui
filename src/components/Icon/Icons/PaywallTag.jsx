import React from 'react';
import styled from 'styled-components';
import {
  white,
  purple,
  purpleLighter,
} from '../../style/colors';
import { fontSizeSmall, fontWeightMedium } from '../../style/fonts';
import Flash from './Flash';

const Tag = styled.span`
  display: flex;
  padding: 4px 8px;
  font-weight: ${fontWeightMedium};
  font-size: ${fontSizeSmall};
  border-radius: 100px;
  color: ${white};
  background-color: ${purpleLighter};
`;

const PaywallTag = () => (
  <Tag>
    <Flash color={purple} />
  </Tag>
);

export default PaywallTag;
