import css from "./BodyTextImage.module.css";

import TextImage from "../../UI/TextImage/TextImage";
import mainImage from "../../../assets/BuildNetworkImg.png";

const BuildNetwork = (props) => {
  return (
    <TextImage>
      <div className={css.textContainer}>
        <h2>Build your network.</h2>
        <p className={css.description}>
          Entrepreneurship can be lonely, but it doesn’t have to be. Meet and
          interact with other action takers in the community, both through your
          personal mastermind group and community-wide networking events.
        </p>
      </div>
      <div className={css.imgContainer}>
        <img src={mainImage} alt="Build Network"></img>
      </div>
    </TextImage>
  );
};

export default BuildNetwork;
