import styled from 'styled-components';
export const SearchWrapper = styled.div `
  height: auto;
  width: 100%;
  margin-left: 8px;
`;
export const SearchInput = styled.input `
  && {
    border: 0;
    border-radius: 4px;
    box-shadow: none;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    font-size: 14px;
    height: ${(props) => (props.height === 'small' ? '28px' : '48px')};
    padding-left: 0px;
    &:focus {
      outline: none;
    }
  }
`;
//# sourceMappingURL=style.js.map