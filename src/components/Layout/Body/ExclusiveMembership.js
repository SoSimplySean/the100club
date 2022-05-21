import TextImage from "../../UI/TextImage/TextImage";
import mainImage from "../../../assets/ExclusiveMembershipImg.png";

const ExclusiveMembership = (props) => {
  return (
    <TextImage
      imageThenText={false}
      header={"Exclusive Membership."}
      paragraph={`Our membership criteria require applicants to have made at least $100
      in any of their side hustles or businesses. We only open applications
      every quarter, accepting a limited pax of 100 to join us each time.`}
      src={mainImage}
      alt={"Exclusive Membership"}
      maxWidth={{ maxWidth: "250px" }}
    />
  );
};

export default ExclusiveMembership;
