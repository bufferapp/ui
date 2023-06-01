import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle `
  html,
  body {
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100%;
    overflow: auto;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyles;
//# sourceMappingURL=GlobalStyles.js.map