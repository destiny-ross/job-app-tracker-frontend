import styled from "styled-components";

const StyledForm = styled.form`
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-height: 70vh;

  .logo-large {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0 0;
      font-size: 48px;
      font-weight: 800;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin: 12px auto;
  }

  input {
    width: 460px;
    height: 45px;
    margin: 0 60px;
    border-radius: 8px 8px 0 0;
    border: 1px solid ${(props) => props.theme.black};

    &:last-of-type {
      border-radius: 0 0 8px 8px;
    }
  }

  button {
    width: 465px;
    height: 45px;
    margin: 0 auto;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    border-radius: 8px;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-weight: 800;
  }
`;

export default StyledForm;
