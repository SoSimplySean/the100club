import css from "./Footer.module.css";

import Container from "../../UI/Container/Container";

const Footer = (props) => {
  return (
    <Container>
      <div className={css.container}>
        <h3 className={css.logo}>
          the<span className={css["logo--highlight"]}>100</span>club
        </h3>
        <div className={css.textContainer}>
          <h4>Our Vision.</h4>
          <p>To help entrepreneurial individuals, be entrepreneurs.</p>
        </div>
        <div className={css.textContainer}>
          <h4>Our Mission.</h4>
          <p>
            To build a supportive community of action-takers, where every
            individual can network, seek advice, and stay accountable as they
            work towards their entrepreneurial goals.
          </p>
        </div>
        <div className={css.textContainer}>
          <h4>Our Team.</h4>
          <a href="https://www.linkedin.com/in/seantansg/" className={css.team}>
            <p>Sean Tan.</p>
          </a>
          <a href="https://www.linkedin.com/in/seantansg/" className={css.team}>
            <p>Joseph Ong.</p>
          </a>
          <a href="https://www.linkedin.com/in/shawn-kok/" className={css.team}>
            <p>Shawn Kok.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jonas-tan-1bbbb3202/"
            className={css.team}
          >
            <p>Jonas Tan.</p>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
