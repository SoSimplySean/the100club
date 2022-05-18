import { Fragment } from "react";
import { createTheme } from "@mui/material";
import css from "./App.module.css";

import Header from "./components/Layout/Header/Header";
import HeroBanner from "./components/Layout/HeroBanner/HeroBanner";
import OurMembers from "./components/Layout/Members/OurMembers";
import ExclusiveMembership from "./components/Layout/Body/ExclusiveMembership";
import GrowBusiness from "./components/Layout/Body/GrowBusiness";
import BuildNetwork from "./components/Layout/Body/BuildNetwork";
import FAQ from "./components/Layout/FAQ/FAQ";
import Footer from "./components/Layout/Footer/Footer";
import { ThemeProvider } from "@mui/system";

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
          <HeroBanner />
          <OurMembers />
          <ExclusiveMembership />
          <GrowBusiness />
          <BuildNetwork />
          <FAQ />
          <Footer />
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
