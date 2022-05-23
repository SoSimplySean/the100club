import TextImage from "../../../UI/TextImage/TextImage";
import mainImage from "../../../../assets/JoinTeamPage/Body.png";

const Body = (props) => {
  return (
    <TextImage
      imageThenText={true}
      header={"It's not going to be easy."}
      paragraph={`The 100 Club only takes in the best. This applies to both our community members and our team. So if you're planning to drift and not put in the work - don't join. It'll be difficult, but if you're willing to champion our cause, we will do everything we can to help champion you.`}
      src={mainImage}
      alt={"not easy"}
      maxWidth={{ maxWidth: "250px" }}
    />
  );
};

export default Body;
