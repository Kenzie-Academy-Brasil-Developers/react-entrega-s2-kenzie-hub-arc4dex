import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;

      :root{
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --purple: #59323F;
        --pink: #FF577F;
        --gree: #3FE864;
        --red: #E83F5B;
      }

      body{
        background-color: #000000;
        color: #ffffff;

        width: 100%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      h1, h2, h3, p, label{
        font-family: 'Inter', sans-serif;
      }

      button{
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        color: #ffffff;
      }

      a {
        text-decoration: none;
      }

      li, ul {
        list-style: none;
      }
    }
`
