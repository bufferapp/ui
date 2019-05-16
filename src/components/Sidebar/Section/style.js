import styled from 'styled-components';
import grayLight from '../../style/colors';

export const SectionStyled = styled.section`
  padding: 16px 8px 0 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  border-bottom: 1px solid;
  border-bottom-color: ${grayLight};
`;

export const StyledUnorderedList = styled.ul`
  padding: 8px 0 0 0;
  margin: 0;
`;
