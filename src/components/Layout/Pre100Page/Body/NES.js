import TextImage from "../../../UI/TextImage/TextImage";
import NESLogo from "../../../../assets/Pre100Page/NESLogo.png";

const NES = (props) => {
  return (
    <TextImage
      imageThenText={true}
      header={"NUS Entrepreneurship Society."}
      paragraph={`Our first partnered society is the renowned NUS Entrepreneurship Society. We have launched The Pre-100 Club as a brand new partnered division between NES & The 100 Club, with the goal of helping aspiring entrepreneurs in NES become entrepreneurs. `}
      src={NESLogo}
      alt={"Grow Business"}
      maxWidth={{ maxWidth: "250px" }}
    />
  );
};

export default NES;
