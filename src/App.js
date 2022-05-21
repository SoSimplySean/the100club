import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import css from "./App.module.css";

import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import SwagStorePage from "./pages/SwagStorePage";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00203F",
    },
    secondary: {
      main: "#85DDB5",
    },
    text: {
      primary: "#00203F",
    },
    info: {
      main: "#2E5994",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <div className={css.container}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" element={<SwagStorePage />} />
              <Route path="/directory" element={<DirectoryPage />} />
            </Routes>
          </main>
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
