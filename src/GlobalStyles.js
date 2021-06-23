import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Gin-Regular';
    src: local('Gin-Regular'), url('./fonts/Gin-Regular.woff'), format('woff');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    overflow-x: hidden;
  }

  li {
    list-style: none;
  }
`;
