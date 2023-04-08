import StyledForm from "./IndexPage.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const IndexPage = ({ setUser }) => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/dashboard");
  });

  return (
    <StyledForm>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </StyledForm>
  );
};
export default IndexPage;
