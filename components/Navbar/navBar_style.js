import { createGlobalStyle } from "styled-components";

export const GlobalStyel = createGlobalStyle`
.navbar{
    height: 139px;
    .top{
        display: flex;
        justify-content: space-between;
        .logo{
            height: 28px;
            left: 50px;
            top: 19px;
            position: relative;
            font-family: Comme;
            font-size: 20px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.55em;
            text-align: left;
            display: flex;
            align-items: center;
            letter-spacing: 0.55em;
            color: #E5DFD9;

        }
        .menuAction{
            display: flex;
            height: 24px;
            width: 161px;
            justify-content: space-between;
            position: relative;
            top: 21px;
            right: 40px;
        }
    }

    .bottom{
        display: flex;
        justify-content: center;
      
        ul{
            /* top: 409px; */
            display: flex;
            justify-content: space-between;
            position: relative;
            top: 69px;
            width: 472px;
            .link{
                a{
                    color: #E5DFD9;
                    text-decoration: none;
                    width: 35px;
                    height: 18px;
                    font-size: 14px;
                    line-height: 17.5%;
                    font-family: Encode Sans;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                    letter-spacing: 0.1em;
                    text-align: left;

    
                }
            }
        }
    }
}
`;
