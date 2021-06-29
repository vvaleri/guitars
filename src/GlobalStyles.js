import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Gin-Regular';
    src: local('Gin-Regular'), url('./fonts/Gin-Regular.woff'), format('woff');
    src: local('Gin-Regular'), url('./fonts/Gin-Regular.woff2'), format('woff2');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    overflow-x: hidden;
    height: 100vh;
    background-image: url('./img/body-bg.png');
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
}

  main {
    max-width: 1360px;
    padding: 40px 60px 20px;
    margin: 0 auto;
  }

  h1 {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
  }
`;