import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: 'Inconsolata',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100%;
      position: relative;
      overflow-x: hidden;
    }

    #root {
      overflow-wrap: break-word;
      overflow: hidden;
      font-size:15px;
    }

    `;

export default GlobalStyle;
