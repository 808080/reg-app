import { createGlobalStyle } from 'styled-components';
import { C_BG, BORDER } from './constants';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 30px 10px;
    margin: 0;
    background-color: ${C_BG};
    font-family: sans-serif;
  }
  main {
    padding: 20px;
    min-height: 200px;
  }
  .container {
    max-width: 420px;
    margin: 0 auto;
    border: ${BORDER};
    overflow: hidden;
    background-color: #fff;
    border-radius: 7px;
  }
`;