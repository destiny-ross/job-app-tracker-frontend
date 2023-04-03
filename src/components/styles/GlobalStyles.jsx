import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:null');
html {font-size: 100%;} /*16px*/
body {
  background: white;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}
p {margin-bottom: 1rem;}
h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 600;
  line-height: 1.3;
}
h1 {
  margin-top: 0;
  font-size: 1.802rem;
}
h2 {font-size: 1.602rem;}
h3 {font-size: 1.424rem;}
h4 {font-size: 1.266rem;}
h5 {font-size: 1.125rem;}
small, .text_small {font-size: 0.889rem;}
body {
  background:${(props) => props.theme.darkGrey};
}

.App {
  width:100vw;
  min-height:100vh;
  overflow:hidden;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
}
`;

export default GlobalStyles;