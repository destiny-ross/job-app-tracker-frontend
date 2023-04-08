import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: ${(props) => props.theme.blue};
  min-height: calc(100vh - 80px);
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  span {
    height: 45px;
    margin: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: white;
  }
`;

export default StyledNavigation;
