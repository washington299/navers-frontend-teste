import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--secondary-color);
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    --primary-color: #212121;
    --secondary-color: #FFFFFF;

    --extra-small-font-size: 12px;
    --small-font-size: 14px;
    --normal-font-size: 16px;
    --big-font-size: 24px;
    --large-font-size: 28px;
    --extra-big-font-size: 40px;
  }
`;
