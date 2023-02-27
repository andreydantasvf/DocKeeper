import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16.5%;
  }

  body {
    background-color: #efefef;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(.9);
  }
`;
