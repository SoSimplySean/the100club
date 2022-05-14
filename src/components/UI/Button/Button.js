import css from "./Button.module.css";

const Button = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={css.button}
    >
      {props.text}
      <i className={`bi bi-chevron-double-right ${css.chevron}`}></i>
    </a>
  );

  //   const linkTo = (e) => {
  //       e.preventDefault();
  //       // window.location.href = "http://google.com";
  //       window.open({props.link}, "_blank");
  //   }

  // return (

  //   <button
  //     type="button"
  //     onClick={linkTo};
  //   >
  //     {props.link}
  //     {props.text}
  //   </button>
  // );
};

export default Button;
