import style from 'styled-components';
import { HotKeys } from 'react-hotkeys';

export const SearchWrapper = style(HotKeys)`
  height:  auto;
`;

export const SearchInput = style.input`
    border: 0;
    border-bottom:  1px solid #ecf0f3;
    border-radius: 4px;
    box-shadow: none;
    width: 100%;
    padding: 0 7px;
    box-sizing: border-box;
    resize: none;
    font-size: 14px;
    height: 35px;
    &:focus {
      outline: none;
    }
`;
