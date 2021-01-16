import styled, { createGlobalStyle } from 'styled-components';

export const AppStyles = createGlobalStyle`
  body {
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.07em;
    line-height: 150%;
    font-size: 14px;
    box-sizing: border-box;
    color: #151515;
    margin: 0;
    height: 100%;
    > * {
      box-sizing: border-box;
    }
    &[isoverlay="true"]::before {
      content: '';
      height: 100%;
      width: 100%;
      position: fixed;
      z-index: 2;
      left: 0;
      top: 0;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.7);
      overflow-x: hidden;
      transition: 0.5s ease;
    }
    @media (max-width: 1600px) {
      // Credit for math: https://www.madebymike.com.au/writing/precise-control-responsive-typography/

      font-size: calc(14px + (20 - 14) * ((100vw - 428px) / (1600 - 428)));
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    border-radius: 15px;
    width: calc(100% - 1.5em);
    border: none;
    outline: none;
    box-shadow: inset 5px 5px 10px 5px ${({ theme }) => theme.boxShadowColor};
    padding: 0.5em 1em;
    &:focus {
      box-shadow: 0 0 5px 3px ${({ theme }) => theme.primaryColor};
    }
    font-size: 1em;
    letter-spacing: 0.1em;
  }
  textarea {
    border-radius: 15px;
    width: calc(100% - 1.5em);
    border: none;
    outline: none;
    box-shadow: inset 5px 5px 10px 5px ${({ theme }) => theme.boxShadowColor};
    padding: 0.5em 1em;
    resize: none;
    &:focus {
      box-shadow: 0 0 5px 3px ${({ theme }) => theme.primaryColor};
    }
    font-size: 1em;
  }
  button[type=submit] {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.fontColor};
    padding: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 3px 3px ${({ theme }) => theme.boxShadowColor};
    &:hover {
      color: ${({ theme }) => theme.fontAccentColor};
      text-decoration: none;
    }
    &:disabled {
      filter: grayscale(60%);
    }
    &:disabled:hover {
      color: ${({ theme }) => theme.fontColor};
      text-decoration: none;
    }
    &:active {
      box-shadow: 0 0 1px 1px ${({ theme }) => theme.boxShadowColor};
    }
  }
  button {
    &:hover {
      text-decoration: underline;
    }
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
    max-height: 100%;
  }
  h1 {
    font-size: 2.5em;
    margin: 0.3em;
    margin-bottom: 1.5em;
  }
  h2 {
    font-size: 1.5em;
    margin: 0.5em;
    margin-bottom: 1.5em;
  }
`;

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  margin: 0 auto;
`;
