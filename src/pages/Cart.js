import { Fragment } from "react";

import HeroBanner from "../components/Layout/CartPage/HeroBanner";
import Body from "../components/Layout/CartPage/Body";

const CartPage = ({ session, user }) => {
  return (
    <Fragment>
      <HeroBanner />
      <Body session={session} user={user} />
    </Fragment>
  );
};

export default CartPage;
