import TextImage from "../../UI/TextImage/TextImage";
import mainImage from "../../../assets/GrowBusinessImg.png";

const GrowBusiness = (props) => {
  return (
    <TextImage
      header={"Grow Your Business."}
      paragraph={`Get matched up into a mastermind group of 4 -6 like-minded
      action-takers. Meet regularly to discuss problems and solutions + stay
      accountable in order to accelerate business growth.`}
      src={mainImage}
      alt={"Grow Business"}
      maxWidth={{ maxWidth: "250px" }}
    />
  );
};

export default GrowBusiness;
