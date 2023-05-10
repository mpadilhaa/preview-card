import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    
  }

  h1,
  h2,
  span {
    font-family: ${({ theme }) => theme.tipography.fontFamilyTitleAndNumber};
  }

  h5,
  h6,
  p,
  button {
    font-size: ${({ theme }) => theme.tipography.p};
    font-family: ${({ theme }) =>
      theme.tipography.fontFamilyParagraphAndButton};
       font-weight: ${({ theme }) => theme.tipography.pAndBtnWeight};
  }

  button {
   
    background-color: ${({ theme }) => theme.colors.button};
  }



`;
