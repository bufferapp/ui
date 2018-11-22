import styled from 'styled-components';

export const ButtonStyled = styled.div`
  height:  ${props =>
    (props.large ? '48px' :
        props.small ? '32px' :
                '40px')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${props=> (props.small ? '8px' : '16px')};
  padding-right:  ${props=> (props.small ? '8px' : '16px')};
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  border: 0;
  -webkit-appearance: none;
  position: relative;
  transition-property: background-color, border-color, color;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 0 0 auto;
  font-family: Roboto,serif;
  background-color: ${props =>
    (props.primary ? '#2c4bff' :
        props.secondary ? '#fff' :
            props.link || props.text ? 'transparent' :
                'white')};
  color: ${props =>
    (props.primary ? '#fff' :
        props.secondary ? '636363' :
            props.link ? '#2C4BFF' :
                '#77797a')};
  border: ${props => (props.secondary ? '1px solid #B8B8B8' : '0')};
  
  :hover {
      transition-property: background-color, border-color, color;
      transition-duration: 0.1s;
      transition-timing-function: ease-in;
      background-color: ${props => (props.primary ? '#1f35b3' : 'inherit')};
      border-color: ${props => (props.secondary ? '#636363' : 'inherit')};
      color: ${props =>
    (props.secondary ? '#3d3d3d' :
        props.text ? '#3d3d3d' :
            props.link ? '#1F35B3' :
                '#fff')};
  }
  
  :active {
    top: 1px;
  }
  
  :focus {
      box-shadow: 0 0 0 3px #ABB7FF;
      outline: 0;
      border-color: ${props => (props.secondary ? '#2c4bff' : 'inherit')};
      color: ${props => (props.secondary ? '#3d3d3d' : 'inherit')};
    }
`;

