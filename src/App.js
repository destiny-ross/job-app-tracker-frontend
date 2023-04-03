import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import Navigation from "./components/Navigation/Navigation";

const theme = {
  darkGrey: "#393939",
  blue: "#2E9BFF",
  blueMedium: "#2d8fe9",
  darkBlue: "#074EB8",
  purple: "#9E22C9",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
