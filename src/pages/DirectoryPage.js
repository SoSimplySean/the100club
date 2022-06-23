import { Fragment } from "react";

// import Container from "../components/UI/Container/Container";
import HeroBanner from "../components/Layout/DirectoryPage/HeroBanner";
import Body from "../components/Layout/DirectoryPage/Body";

const DirectoryPage = ({ session }) => {
  return (
    <Fragment>
      <HeroBanner />
      <Body session={session} />
    </Fragment>
  );
};

export default DirectoryPage;
