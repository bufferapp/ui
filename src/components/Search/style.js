import style from 'styled-components';
import { HotKeys } from 'react-hotkeys';

export const SearchWrapper = style(HotKeys)`
  height:  ${props => (props.hasSearch ? 'auto' : '0')};;
`;

export const SearchInput = style.input`
    border: 0;
    border-bottom:  ${props => (props.hasSearch ? '1px solid #ecf0f3' : 'none')};
    border-radius: 4px;
    box-shadow: none;
    width: 100%;
    padding: ${props => (props.hasSearch ? '0 7px' : '0')};
    box-sizing: border-box;
    resize: none;
    font-size: 14px;
    height: ${props => (props.hasSearch ? '35px' : '0px')}
    &:focus {
      outline: none;
    }
`;
