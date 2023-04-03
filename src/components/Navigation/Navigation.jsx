import StyledNavigation from "./Navigation.styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <span>
        <i className="fa-solid fa-file-lines fa-lg"></i>
      </span>
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
