import css from "./HeroBanner.module.css";

import Button from "../../UI/Button/Button";
import TextImage from "../../UI/TextImage/TextImage";
import heroBannerImage from "../../../assets/HeroBannerImg.png";

const HeroBanner = (props) => {
  return (
    <TextImage>
      <div>
        <h3 className={css.logo}>
          the<span className={css["logo--highlight"]}>100</span>club
        </h3>
        <h1 className={css.heroText}>
          Exclusive <span className={css["heroText--highlight"]}>network</span>{" "}
          <br></br> for Singaporean<br></br> entrepreneurs.
        </h1>
        <p className={css.description}>
          The 100 Club, is a mastermind community, that matches entrepreneurial
          individuals into groups of 4, in order for them to support each other
          in staying accountable, sharing advice, and networking to grow their
          business.
        </p>
        <Button text="JOIN WAITLIST" link="https://t.me/JoinThe100Club" />
        <p className={css.ctaDescription}>
          Cohort 001 applications will open from <b>01 Jan 23 - 08 Jan 23</b>
        </p>
        <p>In the mean time, join our waitlist to stay updated.</p>
      </div>
      <div className={css.imgContainer}>
        <img src={heroBannerImage} alt="Hero Banner"></img>
      </div>
    </TextImage>
  );
};

export default HeroBanner;
