import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "Quicksand", sans-serif;
    /* background: ${(props) => props.theme.colors.primary}; */
  }

  /* #root {
    max-width: 1200px;
    margin: 3rem auto;
    background: #FFF;
    border-radius: 4rem;
    min-height: 100vh;
  } */

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;
