import { Fragment } from "react";

import HeroBanner from "../components/Layout/Pre100Page/HeroBanner/HeroBanner";
import NES from "../components/Layout/Pre100Page/Body/NES";
import FAQ from "../components/Layout/Pre100Page/FAQ/FAQ";

const Pre100Page = () => {
  return (
    <Fragment>
      <HeroBanner />
      <NES />
      <FAQ />
    </Fragment>
  );
};

export default Pre100Page;
