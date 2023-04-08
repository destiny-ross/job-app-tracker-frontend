import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyles";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import { useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const theme = {
  darkGrey: "#393939",
  blue: "#2E9BFF",
  blueMedium: "#2d8fe9",
  darkBlue: "#074EB8",
  purple: "#9E22C9",
  white: "#FCFCFC",
};

const Root = () => {
  let location = useLocation();

  return (
    <Auth0Provider
      domain="anabasis.us.auth0.com"
      clientId="baaLHYDettOO3tuPuVLcuQYez2HQRD8I"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          {location.pathname !== "/" && (
            <>
              <Header />
              <Navigation />
            </>
          )}
          <Outlet />
        </div>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default Root;
