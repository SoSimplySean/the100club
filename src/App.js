import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import SwagStorePage from "./pages/SwagStorePage";
import { Popover } from "@typeform/embed-react";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Box,
} from "@mui/material";

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

const styles = {
  container: {
    width: { xs: "80%", sm: "70%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Box sx={styles.container}>
          <Popover
            id="Ad0SWlc0"
            buttonColor="#00203F"
            customIcon="<span>&#9820;</span>"
            size="100"
          />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" element={<SwagStorePage />} />
              <Route path="/directory" element={<DirectoryPage />} />
            </Routes>
          </main>
        </Box>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
