import styled, { createGlobalStyle } from "styled-components";
// import { colors } from "./assets/variables";

export const GlobalStyle = createGlobalStyle`
html{
        box-sizing: border-box;
    }
    *,*::before,*::after{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        font-family: 'Barlow', sans-serif;
        h1,h2,h3,h4,h5,h6,p{
            margin: 0;
        }
        strong{
            font-weight: 600;
        }

    }
`;
