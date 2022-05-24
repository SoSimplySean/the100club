import { Fragment } from "react";

// import Container from "../components/UI/Container/Container";
import HeroBanner from "../components/Layout/DirectoryPage/HeroBanner";
import Body from "../components/Layout/DirectoryPage/Body";

const DirectoryPage = () => {
  return (
    <Fragment>
      <HeroBanner />
      <Body />
      {/* <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Member Exclusive. Work in progress. Prepare yourself for epic-ness.
      </p> */}
    </Fragment>
  );
};

export default DirectoryPage;
