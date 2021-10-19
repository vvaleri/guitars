import { createGlobalStyle } from 'styled-components';
import bodyBg from './img/body-bg.jpg';
import GinRegular from './fonts/Gin-Regular.woff';
import Gibson from './fonts/Gibson.woff';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'GinRegular';
    src: url(${GinRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gibson';
    src: url(${Gibson}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    overflow-x: hidden;
    background-image: url(${bodyBg});
    background-repeat: repeat;
    background-color: #C4C4C4;
    font-family: 'GinRegular';
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

    @media (max-width: 1179px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  button {
    cursor: pointer;
  }

`;
