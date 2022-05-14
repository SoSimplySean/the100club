import css from "./TextImage.module.css";

import Container from "../Container/Container";

const TextImage = (props) => {
  return (
    <Container>
      <div className={css.container}>{props.children}</div>
    </Container>
  );
};

export default TextImage;
