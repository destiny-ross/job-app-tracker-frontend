import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import StyledHeader from "./Header.styles";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let location = useLocation();

  const getDisplayLocation = () => {
    let displayString = location.pathname.substring(1);
    return displayString;
  };

  return (
    <StyledHeader className="App-header">
      <a className="logo" href="/">
        A
      </a>
      {isAuthenticated && (
        <div className="header">
          <section className="search">
            <h2>{getDisplayLocation() || "Dashboard"}</h2>
            <div>
              <input />
              <button>Search</button>
            </div>
          </section>
          <section className="user-info">
            <div className="icons"></div>
            <div className="spacer" />
            <div>
              <p>Alba Gonzalez Villa</p>
              <p>Web Developer</p>
            </div>
            <img src={user.picture} alt={user.name} />
          </section>
        </div>
      )}
    </StyledHeader>
  );
};
export default Header;
