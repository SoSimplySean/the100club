import css from "./Button.module.css";

import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
// import { Button } from "@mui/material";
import { PopupButton } from "@typeform/embed-react";

// const styles = {
//   chevron: {
//     ml: "4.5rem",
//     height: "1rem",
//   },

//   inverted: {
//     backgroundColor: "primary.main",
//     "&:hover": { backgroundColor: "#000000" },
//   },

//   button: {
//     backgroundColor: "secondary.main",
//     color: "#ffffff",
//     textDecoration: "none",
//     py: "0.6rem",
//     px: "1rem",
//     fontSize: "0.8rem",
//     border: "none",
//     cursor: "pointer",
//     outline: "inherit",
//     borderRadius: "0px",
//     transform: "translateY(-0.7rem)",
//     "&:hover": { backgroundColor: "primary.main" },
//   },
// };

const MyButton = (props) => {
  const symbol =
    props.symbol === "arrow" ? (
      <DoubleArrowSharpIcon className={css.chevron} />
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
      <a
        variant="contained"
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className={`${props.className} ${css.button} ${inverted}`}
      >
        {props.text}
        {symbol}
      </a>
    );
  }
};

export default MyButton;
