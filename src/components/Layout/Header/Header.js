import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

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
    <nav onMouseDown={clicked ? handleClick : null} className={css.navbar}>
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
              {/* Issue: template literal doesn't work here for some reason. {`css.${item.cName}`} */}
              <a className={css.navLink} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <Button
            text="LOG IN"
            link="https://t.me/JoinThe100Club"
            inverted={clicked ? "false" : "true"}
            className={css.navButton}
          />
        </li>
        <li>
          <Button
            text="JOIN WAITLIST"
            link="https://t.me/JoinThe100Club"
            className={css.navButton}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
