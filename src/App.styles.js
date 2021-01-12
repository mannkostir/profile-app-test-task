import { createGlobalStyle } from 'styled-components';

export const AppStyles = createGlobalStyle`
  body {
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.07em;
    line-height: 150%;
    font-size: 14px;
    box-sizing: border-box;
    color: #151515;
    @media (max-width: 1600px) {
      // Credit for math: https://www.madebymike.com.au/writing/precise-control-responsive-typography/

      font-size: calc(14px + (20 - 14) * ((100vw - 428px) / (1600 - 428)));
    }
  }
  input {
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 600;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    font-size: 1em;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    font-size: 3em;
    margin: 0.3em;
    margin-bottom: 1.5em;
  }
  h2 {
    font-size: 1.5em;
    margin: 0.5em;
    margin-bottom: 0.8em;
  }
`;
