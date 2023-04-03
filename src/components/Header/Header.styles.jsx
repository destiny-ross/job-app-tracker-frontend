import styled from "styled-components";

const StyledHeader = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-blend-mode: darken;

  .logo {
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2d8fe9;
  }

  h1 {
    margin: 0;
  }
`;

export default StyledHeader;
