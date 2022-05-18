import { BsChevronDoubleRight } from "react-icons/bs";
import css from "./Button.module.css";

const Button = (props) => {
  const symbol =
    props.symbol === "arrow" ? (
      <BsChevronDoubleRight className={css.chevron} />
    ) : null;
  const inverted = props.inverted === "true" ? css.inverted : null;

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={`${css.button} ${inverted} ${props.className}`}
    >
      {props.text}
      {symbol}
    </a>
  );
};

export default Button;
