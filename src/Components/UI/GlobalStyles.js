import styled, { createGlobalStyle } from "styled-components";
import { corFonte } from "./Variaveis.styles";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        color: ${corFonte}
    }
`