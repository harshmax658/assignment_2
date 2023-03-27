import { createGlobalStyle } from "styled-components";

export const GlobalStyel = createGlobalStyle`
.card{
    height: 420px;
    width: 277.39px;
    margin-bottom: 75px;

    .details{
        position: relative;
    top: 15px;

    .title{
        p{

            text-align: center;
        }
    }
    .price_cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    left: 13px;

    .cart{
        position: relative;
    right: 29.67px;
    svg{
        width: 26.08px !important;
    }
    }
    .rup{
        position: relative;
    top: 1px;
    }
}
    }
}
.container{
    display: flex;
    padding: 0 32px;
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 76px;
}

.img{
    img{
        width: 276px !important;
    }
}
.title{
    /* position: absolute; */
/* width: 259px; */
height: 26px;
left: 10.25px;
top: 386.92px;

font-family: 'Encode Sans';
font-style: normal;
font-weight: 500;
font-size: 20.4988px;
line-height: 26px;
/* identical to box height */

letter-spacing: 0.05em;

color: #E5DFD9;
}
.disPrice{
    width: 42px;
    height: 23px;
    font-family: 'Encode Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18.7905px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: right;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #E5DFD9;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.price{
    display: flex;
    align-items: baseline;
    position: relative;
    right: -9px;
}
.orgPrice{
    width: 28px;
height: 15px;

font-family: 'Encode Sans';
font-style: normal;
font-weight: 400;
font-size: 11.9576px;
line-height: 15px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;

font-feature-settings: 'tnum' on, 'lnum' on;
text-decoration: line-through;

color: #E5DFD9;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}

.off{
    width: 50px;
height: 15px;

font-family: 'Encode Sans';
font-style: normal;
font-weight: 500;
font-size: 11.9576px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #2FC14F;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
}

`;
