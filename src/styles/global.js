import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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

  section {
    display: block;
    margin: 0 auto;
    padding: 0 calc(((100% - 71.25rem) /2) + 6.25rem);
  }
`;

export default GlobalStyle;
