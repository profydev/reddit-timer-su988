import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Bitter', serif;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Bitter', serif;
    font-weight: normal;
    font-size: 38px;
    letter-spacing: 0.8px;
  }

  p {
    color: #93918f;
  }
`;

export default GlobalStyle;
