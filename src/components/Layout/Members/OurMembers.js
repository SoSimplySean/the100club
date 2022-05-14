import css from "./OurMembers.module.css";

import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";
import logo6 from "../../../assets/logo6.png";
import logo7 from "../../../assets/logo7.png";
import logo8 from "../../../assets/logo8.png";
import logo9 from "../../../assets/logo9.png";
import logo10 from "../../../assets/logo10.png";
import logo11 from "../../../assets/logo11.png";
import logo12 from "../../../assets/logo12.png";

import Container from "../../UI/Container/Container";

const OurMembers = (props) => {
  return (
    <Container>
      <h3>our members.</h3>
      <div className={css.logoContainer}>
        <img src={logo1} alt="logo1"></img>
        <img src={logo2} alt="logo2"></img>
        <img src={logo3} alt="logo3"></img>
        <img src={logo4} alt="logo4"></img>
        <img src={logo5} alt="logo5"></img>
        <img src={logo6} alt="logo6"></img>
        <img src={logo7} alt="logo7"></img>
        <img src={logo8} alt="logo8"></img>
        <img src={logo9} alt="logo9"></img>
        <img src={logo10} alt="logo10"></img>
        <img src={logo11} alt="logo11"></img>
        <img src={logo12} alt="logo12"></img>
      </div>
    </Container>
  );
};

export default OurMembers;
