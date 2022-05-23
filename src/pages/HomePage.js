import { Fragment } from "react";

import HeroBanner from "../components/Layout/HomePage/HeroBanner/HeroBanner";
import OurMembers from "../components/Layout/HomePage/Members/OurMembers";
import ExclusiveMembership from "../components/Layout/HomePage/Body/ExclusiveMembership";
import GrowBusiness from "../components/Layout/HomePage/Body/GrowBusiness";
import BuildNetwork from "../components/Layout/HomePage/Body/BuildNetwork";
import FAQ from "../components/Layout/HomePage/FAQ/FAQ";

const HomePage = () => {
  return (
    <Fragment>
      <HeroBanner />
      <OurMembers />
      <ExclusiveMembership />
      <GrowBusiness />
      <BuildNetwork />
      <FAQ />
    </Fragment>
  );
};

export default HomePage;
