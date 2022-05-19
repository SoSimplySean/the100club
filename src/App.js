import { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import SwagStorePage from "./pages/SwagStorePage";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontWeightBold: "700",
    fontSize: 14,
  },
  palette: {
    primary: {
      main: "#00203f",
    },
  },
});

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
