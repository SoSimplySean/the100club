import { Fragment } from "react";

// import Container from "../components/UI/Container/Container";
import HeroBanner from "../components/Layout/SwagStorePage/HeroBanner";
import Body from "../components/Layout/SwagStorePage/Body";

const SwagStorePage = ({ session, user }) => {
  return (
    // <Container>
    //   <p style={{ textAlign: "center", fontWeight: "bold" }}>
    //     Member Exclusive. Work in progress. Prepare yourself for epic-ness.
    //   </p>
    // </Container>
    <Fragment>
      <HeroBanner />
      <Body session={session} user={user} />
    </Fragment>
  );
};

export default SwagStorePage;
