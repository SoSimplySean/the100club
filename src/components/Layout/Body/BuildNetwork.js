import TextImage from "../../UI/TextImage/TextImage";
import mainImage from "../../../assets/BuildNetworkImg.png";

const BuildNetwork = (props) => {
  return (
    <TextImage
      imageThenText={false}
      header={"Build Your Network."}
      paragraph={`Entrepreneurship can be lonely, but it doesn’t have to be. Meet and
    interact with other action takers in the community, both through your
    personal mastermind group and community-wide networking events.`}
      src={mainImage}
      alt={"Build Network"}
      maxWidth={{ maxWidth: "250px" }}
    />
  );
};

export default BuildNetwork;
