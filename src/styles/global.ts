import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    transition: 1s;
    font-family: 'Tilt Neon', 'Inter', sans-serif;
    color: var(--grey-600);
   
  }

  @keyframes animacaoInicial {
    from {
      opacity: 0;
      top: -25px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }




  html{
  min-height: 100vh;
    width: 100%;
  }
  
  body{
   
    background-color: var(--grey-100);
    min-height: 100vh;
    width: 100%;
  }

  #root{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  
    width: 100%;
  }

  .App{
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   width: 100%;
   justify-content: space-between;
   min-height: 100vh;
   position: relative;
  }

  .routes{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 100px 20px;

  }

a{
  color: var(--grey-100);
}

 svg {
   cursor: pointer;
  }

 button{
   cursor: pointer;
   background-color: var(--color-primary);
   color: var(--grey-100);
   
  }

:root {
--space-defaut:20px;
--grey-100:  #EEEEEE;
--grey-200: #CCCCCC;
--grey-300: #999999;
--grey-400: #666666;
--grey-500: #333333;
--grey-600:  #000000; 

--color-primary: #4070f4;

--color-primary-hover: #2b5fee;


    /* --color-primary: #fff2ea;
    --color-secondary: #ff9b00;
    --color-assistant: #adce53;
    --color-tertiary-transparent:#e8f6fd;
    --color-secondary-hover : #f57c00;

    --negative: #e60000;
    --negative-hover:#e63738;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155bcb;

    */

  }
`;
