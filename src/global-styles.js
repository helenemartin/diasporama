import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Voyage-Regular.eot";
    src: url("../../fonts/Voyage-Regular.woff2") format("woff2"),
           url("../../fonts/Voyage-Regular.woff") format("woff");
         }

@font-face {font-family: "YoungSerif"; 
src: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot"); 
src: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot?#iefix") 
format("embedded-opentype"), 
url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff2") format("woff2"), 
url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff") format("woff"),
 url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.ttf") format("truetype"), 
 url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.svg#YoungSerif") format("svg"); }
 
//  * {
//     cursor: none;
//   }
    html, body {
        font-family: "Josefin Sans", sans-serif;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        background: #eae2d2;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: #333333;
        font-size: 16px;
        margin: 0;

        
    }
`;
