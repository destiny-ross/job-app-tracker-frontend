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

  .header {
    display: flex;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .search {
    width: calc(100vw - 80px - 35vw);
    padding: 0 40px;

    h2 {
      text-transform: capitalize;
    }

    input {
      height: 50px;
      width: 300px;
      border-radius: 8px 0 0 8px;
      border: none;
      padding: 0 20px;
    }

    button {
      height: 50px;
      padding: 8px 20px;
      background: ${(props) => props.theme.blue};
      color: white;
      border: none;
      border-radius: 0 8px 8px 0;
    }
  }

  .user-info {
    width: 35vw;
    background: ${(props) => props.theme.blueMedium};
    text-align: end;

    .spacer {
      flex-grow: 1;
    }

    img {
      height: 50px;
      width: 50px;
      margin: 15px 20px;
    }
  }
`;

export default StyledHeader;
