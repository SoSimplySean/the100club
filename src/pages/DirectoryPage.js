import { Fragment } from "react";

// import Container from "../components/UI/Container/Container";
import HeroBanner from "../components/Layout/DirectoryPage/HeroBanner";
import Body from "../components/Layout/DirectoryPage/Body";

const DirectoryPage = ({ session, user }) => {
  return (
    <Fragment>
      <HeroBanner />
      <Body session={session} user={user} />
    </Fragment>
  );
};

export default DirectoryPage;
