import { Fragment } from "react";
import { createTheme } from "@mui/material";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";


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
          </Routes>
        </main>
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
