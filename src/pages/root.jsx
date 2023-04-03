import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyles";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const theme = {
  darkGrey: "#393939",
  blue: "#2E9BFF",
  blueMedium: "#2d8fe9",
  darkBlue: "#074EB8",
  purple: "#9E22C9",
  white: "#FCFCFC",
};

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Navigation />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Root;
