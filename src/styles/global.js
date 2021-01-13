import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;

    ::before,
    ::after {
      box-sizing: inherit;
    }

    ::-moz-selection {
      background-color: ${Colors.primary};
      color: ${Colors.white};
    }

    ::selection {
      background-color: ${Colors.primary};
      color: ${Colors.white};
    }
  }

  body,
  html {
    color: ${Colors.grey};
    background-color: ${Colors.primary};
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
