import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  /*-----------------*\
  |   Change Default  |
  \*-----------------*/
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  *::selection{
    background: var(--blue);
    color: var(--white);
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  img {
  
    user-select: none;
  }

  p {
    line-height: 1.3;
  }

  input {
    border: none;
    outline: none;
  }

  button {
    outline: none;
    border: none;
  }
  /*-----------------*\
  |     Variables     |
  \*-----------------*/
  /* Color */
  :root {
    --dark-blue: #375074;
    --blue: #4779B8;
    --blue-dark: #2E6EBB;
    --light-blue: #F1F7FD;
    --dark-purple: #1B1B4B;
    --black: #494949; 
    --white: #ffffff;
    --gray: #A6A6A6;
    --light-gray:#E3E3E3;
    --red: #FF4C4C;
    --light-red: #FFB0B0;
    --green: #C5FFCB;
    --dark-green: #00930F;
  }

  /*-----------------*\
  |     Typography    |
  \*-----------------*/
  .text-normal {
    font-weight: normal;
  }

  /*-----------------*\
  |     Gradient      |
  \*-----------------*/
  .gradient-main {
    background: linear-gradient(94deg, #FFFFFF 0.31%, #DAE4FF 97.67%);
  }

  .gradient-main-vert {
    background: linear-gradient(180deg, #FFFFFF 0.31%, #DAE4FF 97.67%);
  }

  /*-----------------*\
  |      Layout       |
  \*-----------------*/
  .main-layout {
    width: 100%;
    min-height: 100vh;
    background-color: var(--light-blue);
    display: flex;
    flex-direction: column;

    .first-column, .third-column {
      width: 0;
      display: none;
    }

    .second-column {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;

      padding: 0.75rem;
    }

    @media (min-width: 576px){
      .second-column {
        padding: 0.75rem 7rem;
      }
    }

    @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;

      .first-column,
      .third-column {
        display: flex;
        flex-direction: column;
        width: 25%; 
      }

      .third-column {
        padding-top: 0.75rem;
        padding-right: 3.5rem;
      }

      .second-column {
        padding: 0.75rem 2rem;
        width: 50%;
      }
    }
  }

  .header-layout {
    width: 100%;
    height: 100%;
    background-color: var(--light-blue);
    display: flex;
    flex-direction: column;

    .first-column {
      width: 0;
    }

    .second-column {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;

      padding: 0.75rem 0.75rem 0 0.75rem;
    }

    @media (min-width: 576px){
      .second-column {
        padding: 0.75rem 7rem;
      }
    }

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;


      .first-column {
        display: flex;
        width: 25%;
      }

      .second-column {
        padding: 0.75rem 3.55rem 0 0.75rem;
        width: 75%;
      }
    }
  }

  .stretch-image {
      position: relative;
      max-width: 100%;
      width: 100%;
      height: 250px;

      & > div {
        position: relative !important;
        height: 100%;
        width: 100%;
      }
    }

  .groups {
    width: 100%;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    .group-item {
      margin-bottom: 0.75rem;
    }
  }

  /*-----------------*\
  |    Icon Setting   |
  \*-----------------*/
  .text-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      p {
        margin-left: 0.5rem;
      }
    }


  /*-----------------*\
  |     Breakpoint    |
  \*-----------------*/
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {  }
`;
