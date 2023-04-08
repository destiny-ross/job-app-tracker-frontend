import styled from "styled-components";

const StyledForm = styled.form`
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30vh auto;
  max-height: 10vh;

  button {
    width: 460px;
    height: 45px;
    margin: 0 20px;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default StyledForm;
