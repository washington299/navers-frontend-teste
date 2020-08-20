import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--layout-background-color);
  }

  :root {
    --layout-background-color: #E5E5E5;

    --primary-color: #212121;
    --secondary-color: #FFFFFF;

    --small-font-size: 14px;
    --normal-font-size: 16px;
    --big-font-size: 24px;
    --extra-big-font-size: 40px;
  }
`;
