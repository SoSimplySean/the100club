import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

import css from "./Header.module.css";

import Button from "../../UI/Button/Button";
import MenuItems from "./MenuItems";
// import NavLogo from "../../../assets/NavLogo.png";

const Header = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav onClick={clicked ? handleClick : null} className={css.navbar}>
      {/* <div className={css.navLogo}>
        <img src={NavLogo} alt="NavLogo" />
      </div> */}
      <div className={css.navIcon} onClick={handleClick}>
        <HiMenuAlt3 size={36} />
      </div>
      <ul
        className={
          clicked
            ? `${css.navMenu} ${css.active}`
            : `${css.navMenu} ${css.hidden}`
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={css.navLink} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <Button
            text="LOG IN"
            // typeform="true"
            inverted={clicked ? "false" : "true"}
            className={css.navButton}
          />
        </li>
        <li>
          <Button
            text="JOIN WAITLIST"
            typeform="true"
            className={css.navButton}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
