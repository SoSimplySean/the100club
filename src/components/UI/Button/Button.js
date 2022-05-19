import { BsChevronDoubleRight } from "react-icons/bs";
import { PopupButton } from "@typeform/embed-react";
import css from "./Button.module.css";

const Button = (props) => {
  const symbol =
    props.symbol === "arrow" ? (
      <BsChevronDoubleRight className={css.chevron} />
    ) : null;
  const inverted = props.inverted === "true" ? css.inverted : null;

  if (props.typeform === "true") {
    return (
      <PopupButton
        id="Ad0SWlc0"
        className={`${props.className} ${css.button} ${inverted}`}
      >
        {props.text}
        {symbol}
      </PopupButton>
    );
  } else {
    return (
      <button
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className={`${props.className} ${css.button} ${inverted}`}
      >
        {props.text}
        {symbol}
      </button>
    );
  }
};

export default Button;
