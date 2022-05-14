import { Fragment } from "react";
import css from "./App.module.css";

import HeroBanner from "./components/Layout/HeroBanner/HeroBanner";
import OurMembers from "./components/Layout/Members/OurMembers";
import ExclusiveMembership from "./components/Layout/Body/ExclusiveMembership";
import GrowBusiness from "./components/Layout/Body/GrowBusiness";
import BuildNetwork from "./components/Layout/Body/BuildNetwork";
import FAQ from "./components/Layout/FAQ/FAQ";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <Fragment>
      <div className={css.container}>
        <HeroBanner />
        <OurMembers />
        <ExclusiveMembership />
        <GrowBusiness />
        <BuildNetwork />
        <FAQ />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
