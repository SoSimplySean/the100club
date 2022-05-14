import css from "./BodyTextImage.module.css";

import TextImage from "../../UI/TextImage/TextImage";
import mainImage from "../../../assets/GrowBusinessImg.png";

const GrowBusiness = (props) => {
  return (
    <TextImage>
      <div className={css.imgContainer}>
        <img src={mainImage} alt="Grow Business"></img>
      </div>
      <div className={css.textContainer}>
        <h2>Grow your business.</h2>
        <p className={css.description}>
          Get matched up into a mastermind group of 4 -6 like-minded
          action-takers. Meet regularly to discuss problems and solutions + stay
          accountable in order to accelerate business growth.
        </p>
      </div>
    </TextImage>
  );
};

export default GrowBusiness;
