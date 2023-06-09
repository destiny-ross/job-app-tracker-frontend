import { NavLink as Link } from "react-router-dom";
import StyledNavigation from "./Navigation.styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/applications">
        <span>
          <i className="fa-solid fa-file-lines fa-lg"></i>
        </span>
      </Link>
      <span>
        <i className="fa-solid fa-building fa-lg"></i>
      </span>
      <span>
        <i className="fa-solid fa-address-book fa-lg"></i>
      </span>
    </StyledNavigation>
  );
};
export default Navigation;
