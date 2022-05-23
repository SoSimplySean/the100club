import { Fragment } from "react";

import HeroBanner from "../components/Layout/JoinTeamPage/HeroBanner/HeroBanner";
import Roles from "../components/Layout/JoinTeamPage/Roles/Roles";
import Body from "../components/Layout/JoinTeamPage/Body/Body";

const JoinTeamPage = () => {
  return (
    <Fragment>
      <HeroBanner />
      <Body />
      <Roles />
    </Fragment>
  );
};

export default JoinTeamPage;
