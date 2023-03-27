import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 3.6%;
    height: 130px;
    position: relative;
    border-radius: 0px;
    top: 32px;

    
}
.bottomHeader{
    display: flex;
    position: relative;
    top: 75px;

    .svg1{
        position: relative;
left: 47px;
width: 120px;
    }
    .svg2{
        position: relative;
    left: 91px;
    }
}
`;
