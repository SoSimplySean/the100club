import css from "./BodyTextImage.module.css";

import TextImage from "../../UI/TextImage/TextImage";
import mainImage from "../../../assets/ExclusiveMembershipImg.png";

const ExclusiveMembership = (props) => {
  return (
    <TextImage>
      <div className={css.textContainer}>
        <h2>Exclusive Membership.</h2>
        <p className={css.description}>
          Our membership criteria require applicants to have made at least $100
          in any of their side hustles or businesses. We only open applications
          every quarter, accepting a limited pax of 100 to join us each time.
        </p>
      </div>
      <div className={css.imgContainer}>
        <img src={mainImage} alt="Exclusive Membership"></img>
      </div>
    </TextImage>
  );
};

export default ExclusiveMembership;
